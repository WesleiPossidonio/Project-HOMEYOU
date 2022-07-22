import Aos from 'aos'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'

import ImageDesign from '../../Assets/ImageDesign.svg'
import { Button } from '../Button'
import {
  Container,
  ContainerImage,
  Image,
  ContainerItens,
  ContainerText,
  Title,
  Text
} from './style'

export const SectionDesign = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Container id="Design">
      <ContainerImage data-aos="fade-right">
        <Image src={ImageDesign} />
      </ContainerImage>

      <ContainerItens data-aos="fade-left">
        <ContainerText>
          <Title>Design Minimalista</Title>
          <Text>
            Móveis apenas essenciais e com design moderno, além de <br />
            revestimentos bonitos e em cores neutras para manter a casa <br />
            sempre com um estilo clean e suave.
          </Text>
        </ContainerText>
        <Button link> Quero saber mais sobre os design</Button>
      </ContainerItens>
    </Container>
  )
}
