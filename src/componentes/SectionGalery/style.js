import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  background: #f9f9f9;
`

export const ContainerText = styled.div`
  margin-top: 55px;
  margin-bottom: 32px;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 19px;
  font-style: normal;
  font-weight: 600;
  font-size: min(32px, 8.5vw);
  line-height: 39px;
  margin-top: 2em;

  color: #272727;
`

export const Text = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: min(18px, 3.5vw);
  line-height: 160%;

  text-align: center;

  color: #797979;
`

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 50px;

  .ImgOne:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`

export const Image = styled.img`
  width: 396px;
  height: 550px;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    width: 312px;
    height: 350px;
  }
`
