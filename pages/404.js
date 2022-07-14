import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Image,
    Center,
    Button 
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Box>
                <Center>
                    <Image
                        mt={8}
                        mb={8}
                        borderStyle="solid"
                        maxWidth="160px"
                        display="flex"
                        borderRadius="full"
                        src="/images/emoji.png"
                        alt="Image Banner"
                    />
                </Center>
            </Box>
            <Heading as="h1" align="center">404</Heading>
            <Heading fontSize='2xl' align="center">Não encontrada</Heading>
            <Text align="center">A página que você está procurando não foi encontrada.</Text>  
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button coloScheme="teal">Voltar ao início</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound