import { collection, getDoc, getDocs, increment, writeBatch } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Community, CommunitySnippet, communityState } from '../atoms/communitiesAtom';
import { auth, firestore } from '../firebase/clientApp';
import { doc,  } from "firebase/firestore";
import { authModalState } from '../atoms/authModalAtom';
import { useRouter } from 'next/router';

const useCommunityData = () => {
    const [user] = useAuthState(auth)
    const router = useRouter()
    const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)
    const setAuthModalState = useSetRecoilState(authModalState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(()=> {
        if (!user) {
            setCommunityStateValue(prev => ({
                ...prev,
                mySnippets: []
            }))
        }
        getMySnippets()
    }, [user])

    const onJoinOrLeaveCommunity = (communityData:Community, isJoined?: boolean) => {
        if (!user) {
            setAuthModalState({open: true, view: 'login'})
            return
        }
        
        setLoading(true)
        if (isJoined) {
            leaveCommunity(communityData.id)
            return
        }
        joinCommunity(communityData)
    }

    const getMySnippets = async () => {
        setLoading(true)
        try {
            const snippetDocs = await getDocs(
                collection(firestore, `users/${user?.uid!}/communitySnippets`)
            )
            const snippets = snippetDocs.docs.map(doc => ({...doc.data()}))
            setCommunityStateValue(prev => ({
                ...prev,
                mySnippets: snippets as CommunitySnippet[]
            }))
        } catch (error: any) {
            console.log('getMySnippets error', error)
            setError(error.message)
        }
        setLoading(false)
    }
    
    const joinCommunity = async (communityData: Community) => {
        console.log("JOINING COMMUNITY: ", communityData.id);
        try {
            const batch = writeBatch(firestore)
            const newSnippet: CommunitySnippet = {
                communityId: communityData.id,
                imageURL: communityData.imageURL || ''
            }
            batch.set(
                doc(
                    firestore, 
                    `users/${user?.uid!}/communitySnippets`, 
                    communityData.id
                ),
                newSnippet
            )
            batch.update(doc(firestore, 'communities', communityData.id), {
                numberOfMembers: increment(1)
            })
            await batch.commit()

            setCommunityStateValue((prev) => ({
                ...prev,
                mySnippets: [...prev.mySnippets, newSnippet]
            }))
        } catch (error: any) {
            console.log('joinCommunity error', error)
            setError(error.message)
        }
        setLoading(false)
    }

    const leaveCommunity = async (communityId: string) => {
        console.log("LEAVING COMMUNITY: ", communityId);
        try {
            const batch = writeBatch(firestore)

            batch.delete(
                doc(firestore, `users/${user?.uid}/communitySnippets/${communityId}`)
            )
            batch.update(doc(firestore, 'communities', communityId), {
                numberOfMembers: increment(-1)
            })
            await batch.commit()

            setCommunityStateValue((prev) => ({
                ...prev,
                mySnippets: prev.mySnippets.filter(
                    item => item.communityId !== communityId
                )
            }))
        } catch (error) {
            console.log('leaveCommunty error', error)
            setError(error.message)
        }
        setLoading(false)
    }

    const getCommunityData = async (communityId: string) => {
        try {
            const communityDocRef = doc(firestore, 'communities', communityId)
            const communityDoc = await getDoc(communityDocRef)

            setCommunityStateValue(prev => ({
                ...prev,
                currentCommunity: {id:communityDoc.id, ...communityDoc.data() as Community}
            }))
        } catch (error) {
            console.log('getCommunityData error', error);
        }
    } 

    useEffect(() => {
        const {communityId} = router.query

        if (communityId && !communityStateValue.currentCommunity) {
            getCommunityData(communityId as string)
        }
    }, [router.query, communityStateValue.currentCommunity])

    return {
        communityStateValue,
        onJoinOrLeaveCommunity,
        loading,
    }
}
export default useCommunityData;