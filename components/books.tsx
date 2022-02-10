import {
    Box, Heading, Link, Stack, Text, useColorModeValue
} from "@chakra-ui/react";
import Image from "next/image";


interface BookProps {
    url: string;
    author: string;
    title: string;
    img: StaticImageData;
}


const Book = ({ url, author, title, img }: BookProps) => (
    <Box
        role={'group'}
        // p={6}
        w={'300px'}
        h={'370px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        overflow="hidden"
        _hover={{
            boxShadow: 'lg'
        }}
        transitionDuration=".1s"
        zIndex={1}>
        <Link href={url} isExternal>

            <Image
                height={230}
                width={300}
                objectFit={'cover'}
                src={img}
                alt={title + ' ' + 'cover'}
            />
            <Stack p={5} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {author}
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    {title}
                </Heading>
            </Stack>
        </Link>

    </Box>
)

export default Book;