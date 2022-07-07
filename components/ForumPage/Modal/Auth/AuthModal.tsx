import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../../atoms/authModalAtom';
import React from "../../../../node_modules/react";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import ResetPassword from "./ResetPassword";

const AuthModal:React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState)
    
    const handleClose = () => {
        setModalState((prev)=> ({
            ...prev,
            open: false
        }))
    }

    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent bg='brand.400'>
                    <ModalHeader textAlign="center">
                        {modalState.view === 'login' && 'Login'}
                        {modalState.view === 'signup' && 'Sign Up'}
                        {modalState.view === 'resetPassword' && 'Reset Password'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' flexDirection='column' alignItems='center' justifyContent='center' pb={6}>
                        <Flex direction='column' align='center' justify='center' width='70%'>
                            {modalState.view === 'login' || modalState.view === 'signup' ? (
                                <>
                                    <OAuthButtons />
                                    <Text fontWeight={700}>OR</Text>
                                    <AuthInputs />
                                </>
                            ) : <ResetPassword />}
                            
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default AuthModal;