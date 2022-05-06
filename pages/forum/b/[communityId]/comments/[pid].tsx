import { ChakraProvider, theme } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Layout from '../../../../../components/ForumPage/LayoutForum/Layout';
import PageContent from '../../../../../components/ForumPage/LayoutForum/PageContent';
import PostItem from '../../../../../components/ForumPage/Posts/PostItem';
import { auth } from '../../../../../firebase/clientApp';
import usePosts from '../../../../../hooks/usePosts';


const PostPage:React.FC = () => {
    const [user] = useAuthState(auth)
    const {postStateValue, setPostStateValue, onDeletePost, onVote} = usePosts()
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
                            {/* {About} */}
                        </>
                    </PageContent>

                </Layout>
            </ChakraProvider>
        </div>
    )
}
export default PostPage