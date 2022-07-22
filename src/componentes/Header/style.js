import { Link } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 10;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;

  @media screen and (max-width: 880px) {
    justify-content: space-between;
  }
`

export const ContainerLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 2em;

  @media screen and (max-width: 880px) {
    margin-left: 1em;
  }
`

export const Logo = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #272727;
`

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;

  @media screen and (max-width: 880px) {
    display: none;
  }
`
export const HeaderLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;

  color: #272727;

  &:after {
    content: '';
    width: 0px;
    height: 2px;
    margin-top: 5px;

    display: block;
    background: #272727;
    transition: 400ms;
  }

  &:hover::after {
    width: 100%;
  }
`

export const ContainerIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #272727;

  > svg {
    font-size: 25px;
    color: #f9f9f9;
  }
`
export const ContainerIcons = styled.div`
  display: flex;
  gap: 2em;
  margin-left: 5em;

  > svg {
    font-size: 20px;
    color: #272727;
    cursor: pointer;
  }

  > svg:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`
export const Icon = styled.div`
  display: none;

  > svg {
    position: absolute;
    top: 2rem;
    right: 1em;
    font-size: 35px;
    color: #272727;
    text-align: end;
  }

  @media screen and (max-width: 880px) {
    display: flex;
  }
`
