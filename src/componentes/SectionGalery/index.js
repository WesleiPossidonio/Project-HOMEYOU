import Aos from 'aos'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'

import ImageGaleryOne from '../../Assets/ImageGaleryOne.svg'
import ImageGaleryThree from '../../Assets/ImageGaleryThree.svg'
import ImageGaleryTwo from '../../Assets/ImageGaleryTwo.svg'
import {
  Container,
  ContainerText,
  Title,
  Text,
  ContainerImage,
  Image
} from './style'
export const SectionGalery = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Container id="Galery">
      <ContainerText>
        <Title>Galeria</Title>
        <Text>
          Se você está entediado com a aparência da decoração de interiores de
          casas comuns. <br /> trabalhamos com designs diferentes e inovadores
        </Text>
      </ContainerText>

      <ContainerImage>
        <Image className="ImgOne" data-aos="zoom-in" src={ImageGaleryOne} />
        <Image
          className="ImgOne"
          data-aos="zoom-in-down"
          src={ImageGaleryThree}
        />
        <Image className="ImgOne" data-aos="zoom-in-up" src={ImageGaleryTwo} />
      </ContainerImage>
    </Container>
  )
}
