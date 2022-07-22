import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  padding: 70px;
  justify-content: space-evenly;
  overflow-x: hidden;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    justify-content: center;
    gap: 5em;
  }

  @media screen and (max-width: 425px) {
    height: max-content;
  }
`

export const ContainerImage = styled.div`
  width: 487px;
  height: 457px;
  background-color: #272727;
  padding: 40px 0 0 40px;

  @media screen and (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 900px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`

export const Image = styled.img`
  width: 487px;
  height: 457px;

  @media screen and (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 900px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`

export const ContainerItens = styled.div`
  margin-left: 108px;
`

export const ContainerText = styled.div`
  width: 585px;
  background: #272727;
  padding: 20px;
  margin-bottom: 24px;

  @media screen and (max-width: 1200px) {
    width: 420px;
  }

  @media screen and (max-width: 840px) {
    margin-right: 5em;
  }

  @media screen and (max-width: 425px) {
    width: 312px;
    margin-right: 7em;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: min(28px, 5.5vw);
  line-height: 34px;
  margin-bottom: 20px;

  color: #ffffff;

  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: min(16px, 2.9vw);
  line-height: 150%;

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }

  color: #ffffff;
`
