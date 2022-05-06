import { Button, Menu, MenuButton, MenuItem, MenuList, Icon, Flex, MenuDivider, Text } from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons'
import {User, signOut} from 'firebase/auth'
import {auth} from '../../../../firebase/clientApp'
import {FaUserAlt} from 'react-icons/fa'
import {VscAccount} from 'react-icons/vsc'
import {IoSparkles} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineLogin} from 'react-icons/md'
import {useResetRecoilState, useSetRecoilState} from 'recoil'
import {authModalState} from '../../../../atoms/authModalAtom'
import { communityState } from "../../../../atoms/communitiesAtom";



type UserMenuProps = {
    user?: User | null
};

const UserMenu:React.FC<UserMenuProps> = ({user}) => {
    const setAuthModalState = useSetRecoilState(authModalState)

    const logout = async () => {
        await signOut(auth)
    }
    
    return (
        <Menu>
            <MenuButton 
                bg={user ? 'black' : 'brand.400'}
                color='white'
                cursor="pointer" 
                padding='0px 6px'
                borderRadius={4}
                _hover={{outline: '2px solid', outlineColor: 'gray.200'}}
            >
                <Flex align="center">
                    <Flex align="center">
                {user ? (
                    <>
                        <Icon as={FaUserAlt} fontSize={18} mr={1} color='gray.300'/>
                        <Flex 
                            direction='column'
                            display={{base: 'none', lg: 'flex'}}
                            fontSize='8pt'
                            align='flex-start'
                            mr={8}
                        >
                            <Text fontWeight={700}>
                                {user?.displayName || user.email?.split('@')[0]}
                            </Text>
                            <Flex>
                                <Icon as={IoSparkles} color='brand.100' mr={1} />
                                <Text color='gray.400'>1 karma</Text>
                            </Flex>
                        </Flex>
                    </>
                ) : (
                    <Icon as={VscAccount} fontSize={24} color='black' mr={1}/>
                    )}
                    </Flex>
                    <ChevronDownIcon color={user ? 'white' : 'black'}/>
                </Flex>
            </MenuButton>
            <MenuList>
                {user ? (
                    <>
                        <MenuItem
                            
                            fontSize='10pt' 
                            fontWeight={700} 
                            _hover={{bg: 'brand.300', color: 'white'}}
                        >   
                            <Flex align='center'>
                                <Icon as={CgProfile} fontSize={20} mr={2}/>
                                Profile
                            </Flex>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem 
                            fontSize='10pt' 
                            fontWeight={700} 
                            _hover={{bg: 'brand.300', color: 'white'}}
                            onClick={logout}
                        >
                            <Flex align='center'>
                                <Icon as={MdOutlineLogin} fontSize={20} mr={2}/>
                                Log Out
                            </Flex>
                        </MenuItem>
                    </>
                ) : (
                    <>
                        <MenuItem 
                            fontSize='10pt' 
                            fontWeight={700} 
                            _hover={{bg: 'brand.300', color: 'white'}}
                            onClick={() => setAuthModalState({open: true, view: 'login'})}
                        >
                            <Flex align='center'>
                                <Icon 
                                    as={MdOutlineLogin} 
                                    fontSize={20} 
                                    mr={2}
                                />
                                Log In / Sign Up
                            </Flex>
                        </MenuItem>
                    </>
                )}
                
            </MenuList>
        </Menu>
    )
}
export default UserMenu;