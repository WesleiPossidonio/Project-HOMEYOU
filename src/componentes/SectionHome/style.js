import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 70px;
  background: #f9f9f9;

  @media screen and (max-width: 690px) {
    padding: 0;
    justify-content: center;
  }
`

export const ContainerItens = styled.div`
  width: 50%;
  margin: 5em 5em 0 3em;

  @media screen and (max-width: 690px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: min(40px, 2.4vw);

  color: #272727;
  @media screen and (max-width: 690px) {
    font-size: min(40px, 6.5vw);
    margin-top: 3em;
  }
`

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: min(18px, 1.2vw);
  line-height: 160%;
  margin-top: 16px;
  margin-bottom: 46px;

  color: #797979;

  @media screen and (max-width: 690px) {
    font-size: min(18px, 3.1vw);
  }
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 690px) {
    margin-bottom: 2em;
  }
`

export const Image = styled.img`
  width: min(680px, 50%);
  margin-right: 5em;

  @media screen and (max-width: 690px) {
    display: none;
  }
`
