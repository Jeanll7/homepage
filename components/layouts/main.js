import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        < meta  name ="description" content ="Página inicial de Jean" />
        < meta  name ="author" content ="Jean Leal" />
        <meta name="author" content="Portfólio" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <title>Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
