import React from 'react'

import ImageHome from '../../Assets/ImageHome.svg'
import { Button } from '../Button'
import {
  Container,
  ContainerItens,
  Title,
  Text,
  Image,
  ContainerButton
} from './style'

export const SectionHome = () => {
  return (
    <Container id="Home">
      <ContainerItens>
        <Title>
          Ajudar você a encontrar <br /> o melhor conforto,
          <br /> é nossa prioridade.
        </Title>
        <Text>
          Encontre uma variedade de proprieddes que <br /> combinam com você.
          Esqueça todas as difilcudades <br /> em encontrar uma residência
        </Text>
        <ContainerButton>
          <Button>Entre em contato</Button>
          <Button link>Mais sobre nós</Button>
        </ContainerButton>
      </ContainerItens>
      <Image src={ImageHome} alt="imagem Home" />
    </Container>
  )
}
