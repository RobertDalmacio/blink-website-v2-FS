/* eslint-disable jsx-a11y/alt-text */
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase/clientApp';

const OAuthButtons:React.FC = () => {
    const [signinWithGoggle, userG, loadingG, errorG] = useSignInWithGoogle(auth)

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
                {errorG && <Text>{errorG.message}</Text>}
            </Flex>
        </>
    )
}
export default OAuthButtons;