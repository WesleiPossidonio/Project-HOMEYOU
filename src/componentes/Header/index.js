import PropTypes from 'prop-types'
import React from 'react'
import { AiOutlineHeart, AiOutlineHome } from 'react-icons/ai'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdPersonOutline } from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'

import {
  Container,
  ContainerLogo,
  Logo,
  HeaderLink,
  ContainerIcon,
  ContainerLinks,
  ContainerIcons,
  Icon
} from './style'
export const Header = ({ setMenuIsViseble, setClickPage }) => {
  return (
    <Container>
      <ContainerLogo to="Home" spy={true} smooth={true}>
        <ContainerIcon>
          <AiOutlineHome />
        </ContainerIcon>
        <Logo>HOMEYOU</Logo>
      </ContainerLogo>

      <ContainerLinks>
        <HeaderLink to="Home" spy={true} smooth={true}>
          Inicio
        </HeaderLink>
        <HeaderLink to="Galery" spy={true} smooth={true}>
          Galeria
        </HeaderLink>
        <HeaderLink to="Budget" spy={true} smooth={true}>
          Contato
        </HeaderLink>
        <ContainerIcons>
          <MdPersonOutline />
          <AiOutlineHeart />
          <RiSearchLine />
        </ContainerIcons>
      </ContainerLinks>
      <Icon>
        <HiOutlineMenuAlt3
          onClick={() => {
            setMenuIsViseble(true)
            setClickPage(false)
          }}
        />
      </Icon>
    </Container>
  )
}

Header.propTypes = {
  setMenuIsViseble: PropTypes.func,
  setClickPage: PropTypes.func
}
