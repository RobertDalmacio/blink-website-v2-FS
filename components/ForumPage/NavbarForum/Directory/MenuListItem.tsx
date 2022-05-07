/* eslint-disable jsx-a11y/alt-text */
import { Flex, MenuItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import useDirectory from '../../../../hooks/useDirectory';

type MenuListItemProps = {
    displayText: string
    link: string
    imageURL?: string
};

const MenuListItem:React.FC<MenuListItemProps> = ({displayText, link, imageURL}) => {
    const {onSelectMenuItem} = useDirectory()

    return (
        <MenuItem 
            width='100%' 
            fontSize='10pt' 
            _hover={{bg:'brand.300'}} 
            onClick={() => onSelectMenuItem({displayText, link, imageURL})}
        >
            <Flex align='center'>
                <Image 
                    src={imageURL ? `${imageURL}` : '/logos/BLINK.webp'}
                    borderRadius='full' 
                    boxSize='30px' 
                    mr={2}
                />
                
                <Text>{displayText}</Text>
            </Flex>
        </MenuItem>
    )
}
export default MenuListItem;