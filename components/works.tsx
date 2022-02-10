import { Box, Heading, Flex, Stack, Text } from "@chakra-ui/react";
import Image from 'next/image';

export const Works = () => (
    <Box>
        <Text fontSize="4xl" mb="20px">Works</Text>
        <Flex flexWrap="wrap" justifyContent="center" gap="20px">
            {blogPostWithImage()}
            {blogPostWithImage()}
            {blogPostWithImage()}
            {blogPostWithImage()}
        </Flex>
    </Box>
)


export const blogPostWithImage = () => {
    return (
        <Box
            maxW={'320px'}
            w={'full'}
            bg='white'
            boxShadow={'2xl'}
            rounded={'md'}
            mx={0}
            p={6}
            overflow={'hidden'}>
            <Box
                h={'210px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                    src='/../public/headerlogo.png'
                    alt="placeholder"
                    layout={'fill'}
                />
            </Box>
            <Stack>
                <Text
                    color={'green.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}>
                    Research
                </Text>
                <Heading
                    color='gray.700'
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    Boost your conversion rate
                </Heading>
            </Stack>
        </Box>
    );
}
