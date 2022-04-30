import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../../chakra/theme'
import Layout from '../../components/ForumPage/LayoutForum/Layout'
import {RecoilRoot} from 'recoil'

const Forum: React.FC = () => {
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
                        
                
                


                    </Layout>
                </ChakraProvider>
            </RecoilRoot>
        </div>
    )
} 

export default Forum;