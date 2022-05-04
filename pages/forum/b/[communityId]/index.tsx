import Layout from '../../../../components/ForumPage/LayoutForum/Layout'
import {RecoilRoot, useSetRecoilState} from 'recoil'
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head'
import { theme } from '../../../../chakra/theme';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../../../firebase/clientApp';
import { GetServerSidePropsContext } from 'next';
import {Community, communityState} from '../../../../atoms/communitiesAtom'
import safeJsonStringify from 'safe-json-stringify'
import CommunityNotFound from '../../../../components/ForumPage/Community/CommunityNotFound';
import HeaderCommunity from '../../../../components/ForumPage/Community/HeaderCommunity';
import PageContent from '../../../../components/ForumPage/LayoutForum/PageContent';
import CreatePostLink from '../../../../components/ForumPage/Community/CreatePostLink';
import Posts from '../../../../components/ForumPage/Posts/Posts';
import { useEffect } from 'react';
import About from '../../../../components/ForumPage/Community/About';


type CommunityPageProps = {
    communityData: Community
};

const CommunityPage:React.FC<CommunityPageProps> = ({communityData}) => {
    const setCommunityStateValue = useSetRecoilState(communityState)
    
    useEffect(() => {
        setCommunityStateValue(prev => ({
            ...prev,
            currentCommunity: communityData,
        }))
    }, [])

    if (!communityData) {
        return (
            <div>
                <ChakraProvider theme={theme}>
                    <Layout>
                        <Head>
                            <title>BLINK | Forum </title>
                            <meta name="description" content="Blackpink Official Fan page" />
                            <link rel="icon" href="/logos/blink-logo.jpg" />
                        </Head>
                        <CommunityNotFound />
                    </Layout>
                </ChakraProvider>
            </div>
        )
    }

    return (
        <div>
            <ChakraProvider theme={theme}>
                <Layout>
                    <Head>
                        <title>BLINK | Forum | {communityData.id}</title>
                        <meta name="description" content="Blackpink Official Fan page" />
                        <link rel="icon" href="/logos/blink-logo.jpg" />
                    </Head>
                        
                    <HeaderCommunity communityData={communityData} />
                    <PageContent>
                        <>
                                
                            <CreatePostLink />
                            <Posts communityData={communityData} />
                        </>
                        <><About communityData={communityData}/></>
                    </PageContent>

                </Layout>
            </ChakraProvider>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    
    try {
        const communityDocRef = doc(firestore, 'communities', context.query.communityId as string)
        const communityDoc = await getDoc(communityDocRef)

        return {
            props: {
                communityData: communityDoc.exists()  
                ? JSON.parse(safeJsonStringify({id: communityDoc.id, ...communityDoc.data()}))
                : ''
            }
        }
    } catch (error) {
        console.log('getServerSideProps error', error);
    }
}

export default CommunityPage;