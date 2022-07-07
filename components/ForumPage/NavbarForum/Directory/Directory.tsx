/* eslint-disable jsx-a11y/alt-text */
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Icon, Image, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { TiHome } from 'react-icons/ti';
import useDirectory from '../../../../hooks/useDirectory';
import Communities from './Communities';

const Directory:React.FC = () => {
    const {directoryState, toggleMenuOpen} = useDirectory()

    return (
        <Menu isOpen={directoryState.isOpen}>
            <MenuButton 
                cursor="pointer" 
                padding='0px 6px'
                borderRadius={4}
                mr={2}
                ml={{base: 0, md: 2}}
                _hover={{outline: '1px solid', outlineColor: 'gray.200'}}
                onClick={toggleMenuOpen}
            >
                <Flex align="center" justify='space-between' width={{base: 'auto', lg:'200px'}}>
                    <Flex align="center">
                        {directoryState.selectedMenuItem.displayText === 'Home' ? (
                            <Icon as={TiHome} fontSize={24} mr={{base: 1, md: 2}}/>
                        ) : (
                            <Image 
                                src={directoryState.selectedMenuItem.imageURL 
                                    ? `${directoryState.selectedMenuItem.imageURL}` 
                                    : '/logos/BLINK.webp'
                                }
                                borderRadius='full' 
                                boxSize='30px' 
                                mr={2}
                            />
                        )}
                        <Flex display={{base: 'none', lg: 'flex'}}>
                            <Text fontWeight={600} fontSize='10pt'>
                                {directoryState.selectedMenuItem.displayText}
                            </Text>
                        </Flex>
                    </Flex>
                    <ChevronDownIcon />
                </Flex>
            </MenuButton>
            <MenuList>
                <Communities />
            </MenuList>
        </Menu>
    )
}
export default Directory;