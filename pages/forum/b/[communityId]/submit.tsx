import Layout from '../../../../components/ForumPage/LayoutForum/Layout'
import {RecoilRoot, useRecoilValue} from 'recoil'
import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import Head from 'next/head'
import { theme } from '../../../../chakra/theme';
import PageContent from '../../../../components/ForumPage/LayoutForum/PageContent';
import NewPostForm from '../../../../components/ForumPage/Posts/NewPostForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase/clientApp';
import { communityState } from '../../../../atoms/communitiesAtom';


const SubmitPostPage:React.FC = () => {
    const [user] = useAuthState(auth)
    const communityStateValue = useRecoilValue(communityState)
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
                                {user && <NewPostForm user={user} />}
                            </>
                            <>
                                {/* About */}
                            </>
                        </PageContent>
                    </Layout>
                </ChakraProvider>
            </RecoilRoot>
        </div>
    )
}
export default SubmitPostPage;