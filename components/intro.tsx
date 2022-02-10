import { Link } from "@chakra-ui/react"
import styled from '@emotion/styled'
import NextLink from 'next/link'



const ExternalIntroLinkStyled = styled.a`
color:#70ACF9;
text-decoration:underline;
`
const InternalIntroLinkStyled = styled.a`
color:#5A2CF4;
text-decoration:underline;
`

interface IntroLinkProps {
    href: string
    children: React.ReactNode
}


export const InternalIntroLink = ({ href, children }: IntroLinkProps) => {
    return (
        <NextLink href={href} passHref>
            <ExternalIntroLinkStyled>
                {children}
            </ExternalIntroLinkStyled>
        </NextLink>
    )
}

export const ExternalIntroLink = ({ href, children }: IntroLinkProps) => {
    return (

        <Link href={href} isExternal>
            <InternalIntroLinkStyled>
                {children}
            </InternalIntroLinkStyled>
        </Link>
    )
}
