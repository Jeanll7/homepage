import NextLink from 'next/link'
import {
  Button,
  Link,
  Container,
  Box,
  Heading,
  Image,
  Center,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
// import Image from 'next/image'

// const ProfileImage = chakra(Image, {
//   shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
// })

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box>
            <Center>
              <Image
                p={1.5}
                mt={6}
                mb={6}
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="240px"
                display="flex"
                borderRadius="full"
                src="/images/codeE.jpg"
                alt="Image Banner"
              />
            </Center>
          </Box>
          <Box
          borderRadius="lg"
          mt={4}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        > 
          Olá, Sou Desenvolvedor FrontEnd!
          {/* Olá, Sou Desenvolvedor Full Stack! */}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jean Leal
            </Heading>
            <p>Habilidades ( HTML / CSS / JS )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/perfil.png"
              alt="Image perfil"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Sobre mim
          </Heading>
          <Paragraph>
            Jean é um desenvolvedor freelancer e FrontEnd com paixão por criar serviços/coisas digitais que ele deseja. Ele tem um talento especial para todas as coisas de lançamento de produtos, desde o planejamento e design até a solução de problemas da vida real com código. Quando não está online{' '}
            <NextLink href="/" passHref scroll={false}>
              <Link>Estuda.</Link>
            </NextLink> &quot;Ele publica conteúdo para marketing de seus produtos na
            <NextLink href="/" passHref scroll={false}>
              <Link target="_blank"> Code</Link>
            </NextLink>
            &quot; tem mais de 100 contribuições.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                variant="outline"
              >
                Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
              Biografia
          </Heading>
          <BioSection>
              <BioYear>1982</BioYear>
              Nasceu em Blumenau, Brasil.
          </BioSection>
          <BioSection>
              <BioYear>2019</BioYear>
              Análise e Desenvolvimento de Sistemas
          </BioSection>
          <BioSection>
              <BioYear>2022</BioYear>
              Estudando React / Next.js 
          </BioSection>
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Eu ♥
            </Heading>
            <Paragraph>
              Tecnologia, Livros e Esportes
            </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contato
          </Heading>
          <List>
            <ListItem>
              <Link href="https://www.linkedin.com/in/jean-leal-31684217b" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}>
                    Linkedin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/Jeanll7" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}>
                    GitHub
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
// export { getServerSideProps } from '../components/chakra'
