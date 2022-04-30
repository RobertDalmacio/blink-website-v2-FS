import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
    baseStyle: {
        borderRadius: "60px",
        fontSize: "10pt",
        fontWeight: 700,
        _focus: {
            boxShadow: "none",
        },
    },
    sizes: {
        sm: {
            fontSize: "8pt",
        },
        md: {
            fontSize: "10pt",
            // height: "28px",
        },
    },
    variants: {
        solid: {
            color: "black",
            bg: "brand.300",
            _hover: {
                bg: "gray.200",
            },
        },
        outline: {
            color: "brand.200",
            border: "1px solid",
            borderColor: "brand.200",
            _hover: {
                bg: "gray.200",
            },
        },
        oauth: {
            height: "34px",
            border: "1px solid",
            borderColor: "gray.300",
            _hover: {
                bg: "gray.50",
            },
        },
    },
};