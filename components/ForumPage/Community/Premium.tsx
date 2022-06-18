import React from "react";
import { Flex, Icon, Text, Stack, Button } from "@chakra-ui/react";
import { RiVipCrown2Fill } from "react-icons/ri";

const Premium: React.FC = () => {
    return (
        <Flex
            direction="column"
            color='white'
            borderRadius={4}
            cursor="pointer"
            p="12px"
            border="1px solid"
            borderColor="brand.400"
            bgImage="url(/members/blackpink-banner1.jpg)"
            backgroundSize="50% auto"
            bgGradient='linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url(/members/blackpink-banner1.jpg)'

        >
            <Flex mb={2}>
                <Icon as={RiVipCrown2Fill} fontSize={26} color="brand.100" mt={2} />
                <Stack spacing={1} fontSize="9pt" pl={2}>
                    <Text fontWeight={700}>Blink Premium</Text>
                    <Text>Join for exclusive content and early access to new features.</Text>
                </Stack>
            </Flex>
            <Button height="30px" bg="brand.300">
                Try Now
            </Button>
        </Flex>
    )
}
export default Premium