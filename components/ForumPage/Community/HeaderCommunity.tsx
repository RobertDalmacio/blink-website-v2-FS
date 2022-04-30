/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Community } from '../../../atoms/communitiesAtom';
import useCommunityData from '../../../hooks/useCommunityData'

type HeaderCommunityProps = {
    communityData: Community
};

const HeaderCommunity:React.FC<HeaderCommunityProps> = ({communityData}) => {
    const {communityStateValue, onJoinOrLeaveCommunity, loading} = useCommunityData()
    const isJoined = !!communityStateValue.mySnippets.find(
        (item) => item.communityId === communityData.id
    )
    return (
        <Flex direction='column' width='100%' height='146px'>
            <Box height='50%' bg='brand.300'/>
            <Flex justify='center' bg='brand.400' flexGrow={1}>
                <Flex width='95%' maxWidth='860px'>
                    {communityData.imageURL ? (
                        <Image />
                    ) : (
                        <Image 
                            src='/logos/BLINK.webp'
                            height='90px'
                            position='relative' 
                            top={-3}
                            color='blue.500'
                            border='4px solid white'
                            borderRadius='50%'
                        />
                    )}
                    <Flex padding='10px 16px'>
                        <Flex direction='column' mr={6}>
                            <Text fontWeight={800} fontSize='16pt'>
                                {communityData.id}
                            </Text>
                            <Text fontWeight={600} fontSize='10pt' color='gray.500'>
                                b/{communityData.id}
                            </Text>
                        </Flex>
                        <Button 
                            variant={isJoined ? 'outline' : 'solid'}
                            height='30px'
                            pr={6}
                            pl={6}
                            isLoading={loading}
                            onClick={() => onJoinOrLeaveCommunity(communityData, isJoined)}
                        >
                            {isJoined ? 'Joined' : 'Join'}
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default HeaderCommunity;