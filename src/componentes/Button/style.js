import styled, { css } from 'styled-components'

export const ContainerButton = styled.button`
  width: min(225px, 45vw);
  height: 46px;
  border: none;

  font-style: normal;
  font-weight: 500;
  font-size: min(18px, 4vw);
  line-height: 22px;
  cursor: pointer;

  color: #ffffff;
  background: #272727;

  &:hover {
    box-shadow: 0 0 25px #272727, 0 0 50px #fff;
    transform: scale(1.1);
    transition: all 0.5s;
  }

  &:active {
    box-shadow: none;
  }

  ${({ link }) =>
    link &&
    css`
      color: #272727;
      background: transparent;
      border-bottom: 1px solid #272727;
      width: max-content;
      height: 21px;

      &:hover {
        box-shadow: none;
      }
    `}

  ${({ Budget }) =>
    Budget &&
    css`
      color: #272727;
      background: transparent;
      border: 1px solid #272727;
      width: 225px;

      &:hover {
        box-shadow: none;
        background-color: #272727;
        color: #fff;
        transition: 1s ease;
        transform: scale(1.1);
        transition: all 0.5s;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50px;
      background: transparent;
      height: 50%;
      width: 100%;
      transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
      filter: blur(8px);
      transition: 1 ease;
    }
    &:hover::before {
      background: #272727;
      top: 70px;
    }

    &:active {
      background: none;
    }

    @media screen and (max-width: 375px) {
      width: 270px;
      font-size: 14px;

      &::before {
        content: '';
        position: absolute;
        left: 60px;
        top: 50px;
        background: transparent;
        height: 50%;
        width: 55%;
        transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
        filter: blur(8px);
        transition: 1 ease;
      }
    }


    `}
`
