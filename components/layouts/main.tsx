import { Box } from "@chakra-ui/react"
import Head from "next/head"


interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Jordan's portfolio" />
                <meta name="author" content="Griveau Jordan" />
                <title>Griveau Jordan</title>
            </Head>

            {children}
        </Box>
    )
}

export default Layout