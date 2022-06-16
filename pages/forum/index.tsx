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
import { limit, orderBy, query, collection, getDocs } from 'firebase/firestore'
import usePosts from '../../hooks/usePosts'
import { Post } from '../../atoms/postAtom'
import PostLoader from '../../components/ForumPage/Posts/PostLoader'
import CreatePostLink from '../../components/ForumPage/Community/CreatePostLink'
import PostItem from '../../components/ForumPage/Posts/PostItem'

const Forum: React.FC = () => {
    const [user, loadingUser] = useAuthState(auth)
    const [loading, setLoading] = useState(false)
    const {postStateValue ,setPostStateValue, onSelectPost, onDeletePost, onVote} = usePosts()
    const communityStateValue = useRecoilValue(communityState)

    const buildUserHomeFeed = async () => {
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

    const buildNoUserHomeFeed = () => {

    }

    const getUserPostVotes = () => {

    }
    
    useEffect (() => {
        if (!user && !loadingUser) buildUserHomeFeed(); 
    }, [user, loadingUser])
    
    return (
        <div>
            <RecoilRoot>
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
                            <>
                            
                            </>
                        </PageContent>


                    </Layout>
                </ChakraProvider>
            </RecoilRoot>
        </div>
    )
} 

export default Forum;