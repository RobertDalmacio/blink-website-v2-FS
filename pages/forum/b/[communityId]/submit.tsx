import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RecoilRoot } from 'recoil';
import { theme } from '../../../../chakra/theme';
import About from '../../../../components/ForumPage/Community/About';
import Layout from '../../../../components/ForumPage/LayoutForum/Layout';
import PageContent from '../../../../components/ForumPage/LayoutForum/PageContent';
import NewPostForm from '../../../../components/ForumPage/Posts/NewPostForm';
import { auth } from '../../../../firebase/clientApp';
import useCommunityData from '../../../../hooks/useCommunityData';

const SubmitPostPage:React.FC = () => {
    const [user] = useAuthState(auth)
    const {communityStateValue} = useCommunityData()
    return (
        <div>
            <RecoilRoot>
                <ChakraProvider theme={theme}>
                    <Layout>
                        <Head>
                            <title>BLINK | Forum | Post</title>
                            <meta name="description" content="Blackpink Official Fan page" />
                            <link rel="icon" href="/logos/blink-logo.jpg" />
                        </Head>

                        <PageContent>
                            <>
                                <Box 
                                    p='14px 0px' 
                                    borderBottom='1px solid' 
                                    borderColor='brand.400'
                                >
                                    <Text 
                                    color='brand.400'
                                    fontSize='22px'
                                    fontWeight={600}
                                    >
                                        Create a Post
                                    </Text>
                                </Box>
                                {user && <NewPostForm user={user} communityImageURL={communityStateValue.currentCommunity?.imageURL}/>}
                            </>
                            <>
                                {communityStateValue.currentCommunity && (
                                    <About communityData={communityStateValue.currentCommunity}/>
                                )}
                            </>
                        </PageContent>
                    </Layout>
                </ChakraProvider>
            </RecoilRoot>
        </div>
    )
}
export default SubmitPostPage;