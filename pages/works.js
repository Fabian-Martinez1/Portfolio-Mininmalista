import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import fablog from '../public/images/works/fablog.jpg'
import portfolio from '../public/images/works/portfolio.jpg'
import oldportfolio from '../public/images/works/oldportfolio.jpg'
import eimaterias from '../public/images/works/eimaterias.jpg'
import pingo from '../public/images/works/pingo.jpg'
import cuestiondeespacio from '../public/images/works/cuestiondeespacio.jpg'
import mith from '../public/images/works/mith.jpg'
import megaconversoroc from '../public/images/works/megaconversoroc.jpg'
import resume from '../public/images/works/resume.jpg'
import zonafabo from '../public/images/works/zonafabo.jpg'
import eficiencia from '../public/images/works/eficiencia.jpg'
import pokemon from '../public/images/works/pokemon.jpg'
import converteroc from '../public/images/works/converteroc.jpg'
import keypad from '../public/images/works/keypad.jpg'
import lock from '../public/images/works/lock.jpg'
import gallerix from '../public/images/works/gallerix.JPG'
import linktree from '../public/images/works/linktree.JPG'

const Works = () => (
  <Layout title="Proyectos">
    <Container>
      <Section delay={0.1}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Proyectos
        </Heading>
        <p>Son los que mantengo actualizados, tanto en estetica como en 
          información. Son solo estos 4 ya que se me hace imposible ir actualizando tantos
          proyectos (Ademas no son tan importantes de momento)
        </p>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.4}>
          <WorkGridItem id="resume" thumbnail={resume} title="Resume">
            Un resume sobre mis conocimientos
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="El-Materias" thumbnail={eimaterias} title="EI-Materias">
            Blog en el que subo apuntes sobre materias
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="portfolio" thumbnail={portfolio} title="Portfolio Front End">
            Web con información detallada de mis conocimientos
          </WorkGridItem>
        </Section>
        

        <Section delay={0.7}>
          <WorkGridItem id="linktree" thumbnail={linktree} title="Linktree">
            Clon de Linktree
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.8}>
        <Divider my={6} />

        <Section delay={0.1}>
          <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Colaboraciones
          </Heading>
          <p>Usualmente programo solo pero de vez en cuando surge la oportunidad
            de crear un proyecto con colaboradores
          </p>
        </Section>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.9}>
          <WorkGridItem id="pingo" thumbnail={pingo} title="Pingo">
            Un meme convertido en web
          </WorkGridItem>
        </Section>
        <Section delay={1}>
          <WorkGridItem
            id="cuestion-de-espacio"
            thumbnail={cuestiondeespacio}
            title="Cuestion de Espacio"
          >
            Proyecto del hackaton SpaceApp
          </WorkGridItem>
        </Section>
        <Section delay={1.1}>
          <WorkGridItem id="mith" thumbnail={mith} title="MITH arg">
            Para compartir y crear contenido con fines educativos
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={1.2}>
        <Divider my={6} />

        <Section delay={0.1}>
          <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Proyectos Viejitos
          </Heading>
          <p>Son los proyectos que ya no actualizo unicamente por falta de tiempo. Estoy
            full focus en terminar la uni</p>
        </Section>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={1.3}>
          <WorkGridItem
            id="oldportfolio"
            title="Portfolio2020"
            thumbnail={oldportfolio}
          >
            De mis primeros proyectos
          </WorkGridItem>
        </Section>
        <Section delay={1.4}>
          <WorkGridItem id="gallerix" thumbnail={gallerix} title="Galleriix">
            Web con logos hechos con ias
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="fablog"
            title="Fablog"
            thumbnail={fablog}
          >
            Blog sobre temas de informatica
          </WorkGridItem>
        </Section>
      <Section>
          <WorkGridItem id="mega-conversor-oc" title="MEGA CONVERSOR OC" thumbnail={megaconversoroc}>
            Conversor de numeros binarios 
          </WorkGridItem>
        </Section>
        <Section delay={1.6}>
          <WorkGridItem
            id="zonafabo"
            thumbnail={zonafabo}
            title="Zona Fabo"
          >
            De las primeras webs para materias
          </WorkGridItem>
        </Section>
        <Section delay={1.7}>
          <WorkGridItem id="efficiency-x" thumbnail={eficiencia} title="Efficiency_X">
            Web que calcula la memoria fisica de un programa en pascal
          </WorkGridItem>
        </Section>
        <Section delay={1.9}>
          <WorkGridItem id="pokemon" thumbnail={pokemon} title="Transform Pokemon Resolution">
            Ia para desenfocar imagenes
          </WorkGridItem>
        </Section>
        <Section delay={2}>
          <WorkGridItem id="converter-oc" thumbnail={converteroc} title="Converter-OC">
            Es un conversor de numeros hecho en pascal
          </WorkGridItem>
        </Section>
        <Section delay={2.1}>
          <WorkGridItem id="keypad" thumbnail={keypad} title="Keypad">
            Proyecto hecho en las practicas (con arduino)
          </WorkGridItem>
        </Section>
        <Section delay={2.2}>
          <WorkGridItem id="lock" thumbnail={lock} title="Lock">
          Proyecto introductorio hecho en las practicas (con arduino)
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
