import { extendTheme } from '@chakra-ui/react'

const styles = {
    global: {
        body: {
            bg: 'white'
        }
    }
}

const fonts = {
    heading: "'Roboto'"
}

const colors = {
    grassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const theme = extendTheme({ config, styles, fonts, colors })
export default theme