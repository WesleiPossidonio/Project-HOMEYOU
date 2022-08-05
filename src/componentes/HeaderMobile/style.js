import { Link } from 'react-scroll'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 15;
  display: ${({ menuMobileVisible }) => (menuMobileVisible ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  background-color: #272727;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  transform: translateY(50px);
  margin-top: -0.5em;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #fff;
    transform: rotate(45deg);
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(8px);

      > svg {
        transform: rotate(0deg);
        transition: 0.7s;
      }
    `}
`

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5em;
`
export const HeaderLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 22px;
  cursor: pointer;

  color: #fff;
`
export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;

  > svg {
    font-size: 30px;
    color: #fff;
    cursor: pointer;
  }

  > svg:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`
