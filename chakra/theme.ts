import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import { extendTheme } from "@chakra-ui/react"
import {Button} from '../chakra/button'


export const theme = extendTheme({
    colors: {
        brand: {
            100: "FF3C00",
            200: '#000',
            300: '#F34279',
            400: '#FFB8C1',
        },
    },
    fonts: {
        body: 'Open Sans, sans-serif',
    },
    styles: {
        global: () => ({
            body: {
                bg: "#000",
            },
        }),
    },
    components: {
        Button,
    }
})
