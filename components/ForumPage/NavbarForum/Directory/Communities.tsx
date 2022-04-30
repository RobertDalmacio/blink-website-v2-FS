import React, {useState} from "../../../../node_modules/react"
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import CreateCommunityModal from "../../Modal/CreateCommunity/CreateCommunityModal";
import {GrAdd} from 'react-icons/gr'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase/clientApp";

type CommunitiesProps = {
    
};

const Communities:React.FC<CommunitiesProps> = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false)
    return (
        <>
            <CreateCommunityModal 
                open={open} 
                handleClose={() => setOpen(false)}
                userId={user?.uid!}
            />
            <MenuItem 
                width="100%" 
                fontSize="10pt" 
                _hover={{bg: 'brand.300', color: 'white'}}
                onClick={() => setOpen(true)}
            >
                <Flex align="center">
                    <Icon as={GrAdd} fontSize={20} mr={2}/>
                    Create Community
                </Flex>
            </MenuItem>
        </>
    )
}
export default Communities;