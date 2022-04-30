import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import {User} from 'firebase/auth'


type SearchInputProps = {
    user?: User | null
};

const SearchInput:React.FC<SearchInputProps> = ({user}) => {
    
    return (
        <Flex flexGrow={1} mr={2} align='center' maxWidth={user ? 'auto' : '1400px'}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    // eslint-disable-next-line react/no-children-prop
                    children={<SearchIcon color='gray.400' mb={1}/>}
                    />
                <Input 
                    fontSize='10pt' 
                    placeholder='Search BLINK Forum' 
                    _placeholder={{color: 'gray.500'}} 
                    _hover={{
                        bg: 'white',
                        border: '1px solid',
                        borderColor: 'blue.500'
                    }}
                    _focus={{
                        outline: 'none',
                        border: '1px solid',
                        borderColor: 'blue.500',
                    }}
                    height='34px'
                    bg='gray.50'
                />
            </InputGroup>
        </Flex>
    )
}
export default SearchInput;