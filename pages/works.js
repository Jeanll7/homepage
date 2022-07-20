import { 
    Container, 
    Heading,
    Image,
    Center,
    Box, 
    SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import  Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import banner from '../public/images/works/banner.png'

const Works  = () => {
    return (
        <Layout title="Projetos">
            <Container>
                    <Box>
                        <Center>
                            <Image
                                p={1.5}
                                mt={6}
                                mb={8}
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
                
                <Heading as="h3" fontSize={20} mb={4}>
                    Projetos
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="banner" title="Portfólio" thumbnail={banner}>
                            Em Produção
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="banner" title="Portfólio" thumbnail={banner}>
                            Em Produção
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.1}>
                        <WorkGridItem id="banner" title="Portfólio" thumbnail={banner}>
                            Em Produção
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.1}>
                        <WorkGridItem id="banner" title="Portfólio" thumbnail={banner}>
                            Em Produção
                        </WorkGridItem>
                    </Section>
                    
                    <Section delay={0.2}>
                        <WorkGridItem id="banner" title="Portfólio" thumbnail={banner}>
                            Em Produção
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.2}>
                        <WorkGridItem id="banner" title="Portfólio" thumbnail={banner}>
                            Em Produção
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
