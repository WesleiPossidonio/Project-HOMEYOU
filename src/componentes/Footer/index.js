import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'

import {
  Container,
  ContainerIcons,
  ContainerItens,
  ContainerLinkProduct,
  ContainerLinkInformation,
  ContainerLinkSocialNetworks
} from './style'

export const Footer = () => {
  return (
    <Container>
      <ContainerIcons>
        <AiOutlineHome />
      </ContainerIcons>

      <ContainerItens>
        <ContainerLinkProduct>
          <p className="title">Produtos</p>
          <p>Mobila</p>
          <p>Segurança</p>
          <p>Design Interior</p>
        </ContainerLinkProduct>

        <ContainerLinkInformation>
          <p className="title">Mais Informações</p>
          <p>Contrato</p>
          <p>Sobre nós</p>
          <p>Termos e Condições</p>
        </ContainerLinkInformation>

        <ContainerLinkSocialNetworks>
          <p className="title">Redes Sociais</p>
          <p>Pinterest</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </ContainerLinkSocialNetworks>
      </ContainerItens>
    </Container>
  )
}
