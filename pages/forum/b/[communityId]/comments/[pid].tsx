import { ChakraProvider, theme } from '@chakra-ui/react';
import { doc, getDoc } from 'firebase/firestore';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Post } from '../../../../../atoms/postAtom';
import About from '../../../../../components/ForumPage/Community/About';
import Layout from '../../../../../components/ForumPage/LayoutForum/Layout';
import PageContent from '../../../../../components/ForumPage/LayoutForum/PageContent';
import PostItem from '../../../../../components/ForumPage/Posts/PostItem';
import { auth, firestore } from '../../../../../firebase/clientApp';
import useCommunityData from '../../../../../hooks/useCommunityData';
import usePosts from '../../../../../hooks/usePosts';


const PostPage:React.FC = () => {
    const [user] = useAuthState(auth)
    const router = useRouter()
    const {postStateValue, setPostStateValue, onDeletePost, onVote} = usePosts()
    const {communityStateValue} = useCommunityData()

    const fetchPost = async (postId: string) => {
        try {
            const postDocRef = doc(firestore, 'posts', postId)
            const postDoc = await getDoc(postDocRef)
            setPostStateValue(prev => ({
                ...prev,
                selectedPost: {id: postDoc.id, ...postDoc.data()} as Post
            }))
        } catch (error) {
            console.log('fetchPost error', error);
        }
    }

    useEffect(() => {
        const {pid} = router.query

        if (pid && !postStateValue.selectedPost) {
            fetchPost(pid as string)
        }
    }, [router.query, postStateValue.selectedPost])

    return (
        <div>
            <ChakraProvider theme={theme}>
                <Layout>
                    <Head>
                        <title>BLINK | Forum | Comments</title>
                        <meta name="description" content="Blackpink Official Fan page" />
                        <link rel="icon" href="/logos/blink-logo.jpg" />
                    </Head>
                        
                    
                    <PageContent>
                        <>
                            {postStateValue.selectedPost && (
                                <PostItem 
                                    post={postStateValue.selectedPost} 
                                    onVote={onVote} 
                                    onDeletePost={onDeletePost}
                                    userVoteValue={postStateValue.postVotes.find(item => item.postId === postStateValue.selectedPost?.id)?.voteValue}
                                    userIsCreator={user?.uid === postStateValue.selectedPost?.creatorId}
                                />
                            )}
                            {/* {Comments} */}
                        </>
                        <>
                            {communityStateValue.currentCommunity && (
                                <About communityData={communityStateValue.currentCommunity} />
                            )}
                        </>
                    </PageContent>

                </Layout>
            </ChakraProvider>
        </div>
    )
}
export default PostPage