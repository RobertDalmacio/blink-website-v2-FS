/* eslint-disable jsx-a11y/alt-text */
import { Button, Flex, Image, Stack } from '@chakra-ui/react';
import React, { Ref } from 'react';

type ImageUploadProps = {
    selectFileRef: React.RefObject<HTMLInputElement>
    selectedFile?: string
    onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void
    setSelectedTab: (value: string) => void
    setSelectedFile: (value: string) => void
};

const ImageUpload:React.FC<ImageUploadProps> = ({selectFileRef, selectedFile, onSelectImage, setSelectedFile, setSelectedTab}) => {
    return (
        <Flex direction='column' justify="center" align='center' width='100%'>
            {selectedFile ? (
                <>
                    <Image src={selectedFile} maxWidth='400px' maxHeight='400px' />
                    <Stack direction='row' mt={4}>
                        <Button 
                            height='28px' 
                            onClick={() =>setSelectedTab('Post')}
                        >
                            Back to Post
                        </Button>
                        <Button 
                            variant='outline' 
                            height='28px'
                            onClick={()=> setSelectedFile('')}
                        >
                            Remove
                        </Button>
                    </Stack>
                </>
            ) : (
                <Flex 
                    justify='center' 
                    align='center' 
                    p={20}
                    bg='gray.200'
                    border='1px dashed'
                    borderColor='black'
                    width='100%'
                    borderRadius={4}
                >
                    <Button 
                        variant='outline' 
                        height='28px'
                        onClick={() => selectFileRef.current?.click()}
                    >
                        Upload
                    </Button>
                    <input 
                        ref={selectFileRef} 
                        type="file" 
                        hidden
                        onChange={onSelectImage}
                    />
                </Flex>
            )}
        </Flex>
    )
}
export default ImageUpload;