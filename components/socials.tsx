import { HStack, Link } from "@chakra-ui/react"
import Image from "next/image"
import GitHubIcon from "../public/socials_logos/github.svg"
import LinkedInIcon from "../public/socials_logos/linkedin.svg"


export const SocialsBar = () => (
    <HStack justifyContent="center" pb="20px" gap="10px">
        <Link href="https://www.linkedin.com/in/griveau-jordan/" isExternal>
            <Image src={LinkedInIcon} alt="Python icon" width="32px" height="32px" />
        </Link>
        <Link href="https://github.com/Grivj" isExternal>
            <Image src={GitHubIcon} alt="Python icon" width="32px" height="32px" />
        </Link>
    </HStack>
)