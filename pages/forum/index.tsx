import Head from 'next/head'
import { ChakraProvider, Stack } from '@chakra-ui/react'
import {theme} from '../../chakra/theme'
import Layout from '../../components/ForumPage/LayoutForum/Layout'
import {RecoilRoot, useRecoilValue} from 'recoil'
import PageContent from '../../components/ForumPage/LayoutForum/PageContent'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../firebase/clientApp'
import { useEffect, useState } from 'react'
import { communityState } from '../../atoms/communitiesAtom'
import { limit, orderBy, query, collection, getDocs, where } from 'firebase/firestore'
import usePosts from '../../hooks/usePosts'
import { Post, PostVote } from '../../atoms/postAtom'
import PostLoader from '../../components/ForumPage/Posts/PostLoader'
import CreatePostLink from '../../components/ForumPage/Community/CreatePostLink'
import PostItem from '../../components/ForumPage/Posts/PostItem'
import useCommunityData from '../../hooks/useCommunityData'
import Recommendations from '../../components/ForumPage/Community/Recommendations'
import Premium from '../../components/ForumPage/Community/Premium'


const Forum: React.FC = () => {
    const [user, loadingUser] = useAuthState(auth)
    const [loading, setLoading] = useState(false)
    const {postStateValue ,setPostStateValue, onSelectPost, onDeletePost, onVote} = usePosts()
    const {communityStateValue} = useCommunityData()

    const buildUserHomeFeed = async () => {
        setLoading(true)
        try {
            if (communityStateValue.mySnippets.length) {
                //get posts from users' communities
                const myCommunityIds = communityStateValue.mySnippets.map(snippet => snippet.communityId)
                const postQuery = query(
                    collection(firestore, 'posts'), 
                    where('communityId', 'in', myCommunityIds),
                    limit(10)
                )
                const postDocs = await getDocs(postQuery)
                const posts = postDocs.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setPostStateValue(prev => ({
                    ...prev,
                    posts: posts as Post[],
                }))
                console.log('snippets',communityStateValue.mySnippets)
            } else {
                buildNoUserHomeFeed()
            }
        } catch (error) {
            console.log('buildUserHomeFeed error', error);
        }
        setLoading(false)
    }
    
    const buildNoUserHomeFeed = async () => {
        setLoading(true)
        try {
            const postQuery = query(
                collection(firestore, 'posts'), 
                orderBy('voteStatus', 'desc'), 
                limit(10)
            )
    
            const postDocs = await getDocs(postQuery)
            const posts = postDocs.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setPostStateValue(prev => ({
                ...prev,
                posts: posts as Post[],
            }))
        } catch (error) {
            console.log('buildNoUserHomeFeed error', error);
        }
        setLoading(false)
    }

    const getUserPostVotes = async () => {
        try {
            const postIds = postStateValue.posts.map(post => post.id)
            const postVotesQuery = query(
                collection(firestore, `users/${user?.uid}/postVotes`),
                where('postId', 'in', postIds)
            )
            const postVoteDocs = await getDocs(postVotesQuery)
            const postVotes = postVoteDocs.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setPostStateValue(prev => ({
                ...prev,
                postVotes: postVotes as PostVote[],
            }))
        } catch (error) {
            console.log('getUserPostVotes error', error)
        }
    }

    useEffect(() => {
        if (communityStateValue.snippetsFetched) {
            buildUserHomeFeed()
            console.log('snippetsFetched True')
        }
    }, [communityStateValue.snippetsFetched])

    useEffect (() => {
        if (!user && !loadingUser) buildNoUserHomeFeed(); 
    }, [user, loadingUser])

    useEffect (() => {
        if (user && postStateValue.posts.length) getUserPostVotes()
        return () => {
            setPostStateValue((prev) => ({
                ...prev,
                postVotes: [],
            }))
        }
    }, [user, postStateValue.posts])
    
    return (
        <div>
                <ChakraProvider theme={theme}>
                    <Layout>
                        <Head>
                            <title>BLINK | Forum</title>
                            <meta name="description" content="Blackpink Official Fan page" />
                            <link rel="icon" href="/logos/blink-logo.jpg" />
                        </Head>
                        
                        <PageContent>
                            <>
                                <CreatePostLink />
                                {loading ? (
                                    <PostLoader />
                                ) : (
                                    <Stack>
                                        {postStateValue.posts.map(post => (
                                            <PostItem 
                                                key={post.id}
                                                post={post}
                                                onSelectPost={onSelectPost}
                                                onDeletePost={onDeletePost}
                                                onVote={onVote}
                                                userVoteValue={postStateValue.postVotes.find(
                                                    (item) => item.postId === post.id
                                                )?.voteValue}
                                                userIsCreator={user?.uid === post.creatorId}
                                                homePage
                                            />
                                        ))}
                                    </Stack>
                                )}
                            </>
                            <Stack spacing={5} position="sticky" top="14px">
                                <Recommendations />
                                <Premium />
                            </Stack>
                        </PageContent>


                    </Layout>
                </ChakraProvider>
        </div>
    )
} 

export default Forum;