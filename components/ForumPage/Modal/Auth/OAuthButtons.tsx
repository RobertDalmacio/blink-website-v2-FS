/* eslint-disable jsx-a11y/alt-text */
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
// import {useSignInWithFacebook} from 'react-firebase-hooks/auth'
// import {useSignInWithTwitter} from 'react-firebase-hooks/auth'
import {auth} from '../../../../firebase/clientApp'

const OAuthButtons:React.FC = () => {
    const [signinWithGoggle, userG, loadingG, errorG] = useSignInWithGoogle(auth)
    // const [signinWithFacebook, userF, loadingF, errorF] = useSignInWithFacebook(auth)
    // const [signinWithTwitter, userT, loadingT, errorT] = useSignInWithTwitter(auth)
    return (
        <>
            <Flex direction='column' width='100%' mb={4}>
                <Button 
                    variant='oauth' 
                    mb={2} 
                    isLoading={loadingG} 
                    onClick={() => signinWithGoggle()}
                    bg='gray.50'
                    _hover={{
                        background: "gray.200"
                    }}
                >
                    <Image src='/forum/google-brands.svg' height='20px' mr={4}/>
                    Continue with Google
                </Button>
                {/* <Button 
                    variant='oauth' 
                    mb={2} 
                    isLoading={loadingG} 
                    onClick={() => signinWithFacebook()}
                >
                    <Image src='/forum/facebook-brands.svg' height='20px' mr={4}/>
                    Continue with Facebook
                </Button>
                <Button 
                    variant='oauth' 
                    mb={2} 
                    isLoading={loadingG} 
                    onClick={() => signinWithTwitter()}
                >
                    <Image src='/forum/twitter-brands.svg' height='20px' mr={4}/>
                    Continue with Twitter
                </Button> */}
                {errorG && <Text>{errorG.message}</Text>}
                {/* {errorF && <Text>{errorF.message}</Text>}
                {errorT && <Text>{errorT.message}</Text>} */}
            </Flex>
        </>
    )
}
export default OAuthButtons;