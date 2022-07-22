import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import { MdPersonOutline } from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'

import { Container, HeaderLink, ContainerLinks, ContainerIcons } from './style'

export const HeaderMobile = ({ menuIsViseble, setMenuIsViseble }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsViseble ? 'hidden' : 'auto'
  }, [menuIsViseble])
  return (
    <Container isVisible={menuIsViseble}>
      <IoClose size={35} onClick={() => setMenuIsViseble(false)} />
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
    </Container>
  )
}

HeaderMobile.propTypes = {
  setMenuIsViseble: PropTypes.func,
  menuIsViseble: PropTypes.bool
}
