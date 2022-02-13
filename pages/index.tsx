import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react"
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { NextIcon, PHPIcon, PythonIcon, PytorchIcon, ReactIcon } from '../components/icons'
import { ExternalIntroLink, InternalIntroLink } from '../components/intro'
import MacBookScene from '../components/MacBook'
import { SocialsBar } from '../components/socials'

const HeaderName = styled.span`
  color: orange;
  font-weight: 500;
`


const Home: NextPage = () => (
  <Container maxW={{ base: "680px", lg: "1200px" }} margin="auto" p="20px">
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="20px">
      <Box>
        <SocialsBar />
        <Text as="h1" align="center" fontSize="4xl" pb="40px">
          👋&nbsp;Bonjour! <br />
          I&apos;m <HeaderName>Griveau Jordan</HeaderName>.
        </Text>

        <Text fontSize="2xl" fontWeight="500" pb="20px" align="justify">
          I&apos;m a french student finishing my Master&apos;s Degree in Computer Science at 湖南大学 (Hunan University), China.
        </Text>

        <Text fontSize="xl" pb="20px" align="justify">
          Recently, I&apos;ve been busy working on my <ExternalIntroLink href="/thesis.pdf">thesis</ExternalIntroLink>,
          as well as spending some time on <ExternalIntroLink href="https://leetcode.com/user5194G/">leetcode</ExternalIntroLink> or <ExternalIntroLink href="https://www.codewars.com/users/Grivj">codewars</ExternalIntroLink>,
          studying and <InternalIntroLink href="/books">reading</InternalIntroLink> anything about software engineering or artificial intelligence.
        </Text>

        <Text fontSize="xl" pb="20px" align="justify">
          I don&apos;t know what I would do with my life without a computer and vscode on my side.
          I love getting my hands into code, learning ways to improve and refactor it.
          I fell in love with <ExternalIntroLink href="https://www.python.org/"><PythonIcon /> Python</ExternalIntroLink> and <ExternalIntroLink href="https://pytorch.org/"><PytorchIcon /> PyTorch</ExternalIntroLink>,
          and more recently with <ExternalIntroLink href="https://reactjs.org/"><ReactIcon /> React.js</ExternalIntroLink> and <ExternalIntroLink href="https://nextjs.org/"><NextIcon /> Next.js</ExternalIntroLink>.
          But I started with <ExternalIntroLink href="https://www.php.net/"><PHPIcon /> PHP</ExternalIntroLink>.
        </Text>

        <Text fontSize="xl" pb="20px" align="justify">
          After hours,
          I can be found playing some Chess and learning openings, traveling, especially in deep rural China to meet with the locals.
          I also enjoy watching my portfolio shrinking in the stock market 📉&nbsp;and crypto.
        </Text>
        {/* <Works /> */}
      </Box>

      <Box textAlign={"center"}>
        <MacBookScene />
        {/* <Image src={HeaderImage} alt="Dark abstract logo" height="300px" width="300px" /> */}
      </Box>
    </SimpleGrid>
  </Container>
)

export default Home
