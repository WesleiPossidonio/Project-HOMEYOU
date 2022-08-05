import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import { MdPersonOutline } from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'

import { Container, HeaderLink, ContainerLinks, ContainerIcons } from './style'

export const HeaderMobile = ({
  menuIsViseble,
  setMenuIsViseble,
  clickPage,
  setClickPage
}) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsViseble ? 'hidden' : 'auto'
    document.body.style.overflowY = clickPage && 'auto'
  }, [menuIsViseble, clickPage])
  return (
    <Container isVisible={menuIsViseble} menuMobileVisible={clickPage}>
      <IoClose size={35} onClick={() => setMenuIsViseble(false)} />
      <ContainerLinks>
        <HeaderLink to="Home" spy={true} onClick={() => setClickPage(true)}>
          Inicio
        </HeaderLink>
        <HeaderLink to="Galery" spy={true} onClick={() => setClickPage(true)}>
          Galeria
        </HeaderLink>
        <HeaderLink to="Budget" spy={true} onClick={() => setClickPage(true)}>
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
  menuIsViseble: PropTypes.bool,
  clickPage: PropTypes.bool,
  setClickPage: PropTypes.func
}
