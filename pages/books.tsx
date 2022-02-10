import { Container, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from 'next';
import Book from '../components/books';
import CrackingCodingInterviewCover from '../public/book_covers/cracking_coding_interview.jpeg';
import DeepLearningCover from '../public/book_covers/deep_learning.jpg';
import DeepLearningCodersCover from '../public/book_covers/deep_learning_for_coders.jpg';
import DeepLearningPytorchCover from '../public/book_covers/deep_learning_pytorch.jpg';
import GrokkingCover from '../public/book_covers/grokking.jpg';
import HeadFirstCover from '../public/book_covers/head_first.jpg';
import OpeningTrapsCover from '../public/book_covers/opening_traps.jpg';

const Books: NextPage = () => (
    <Container maxW="680px" margin="auto" p="20px">
        <Text as="h1" align="center" fontSize="4xl" pb="40px">
            Books I enjoyed reading
        </Text>
        <Flex gap={10} direction={{ base: 'column', md: "row" }} alignItems="center" flexWrap="wrap">
            <Book url="https://amzn.to/3suxn1k" title="Grokking Algorithms" author="Aditya Bhargava" img={GrokkingCover} />
            <Book url="https://amzn.to/3uVgz6z" title="Cracking the Coding Interview" author="Gayle Laakmann McDowell" img={CrackingCodingInterviewCover} />
            <Book url="https://amzn.to/3GGag8Q" title="Head First Design Patterns" author="Eric Freeman" img={HeadFirstCover} />
            <Book url="https://amzn.to/3sqAVBA" title="Deep Learning with PyTorch" author="Eli Stevens" img={DeepLearningPytorchCover} />
            <Book url="https://amzn.to/3Jzafpp" title="Deep Learning" author="Ian G., Yoshua B., Aaron C." img={DeepLearningCover} />
            <Book url="https://amzn.to/3oFTel7" title="Deep Learning for Coders" author="Jeremy Howard, Sylvain Gugger" img={DeepLearningCodersCover} />
            <Book url="https://amzn.to/3sCFlFM" title="700 Opening Traps" author="Bill Wall" img={OpeningTrapsCover} />
        </Flex>
    </Container>
)

export default Books