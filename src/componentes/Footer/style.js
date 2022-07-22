import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: max-content;
  padding: 40px;
  display: flex;
  justify-content: flex-start;
  gap: 5em;

  background: #f9f9f9;
`

export const ContainerIcons = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 8em;
  background: #272727;

  > svg {
    font-size: 25px;
    color: #f9f9f9;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5em;
  flex-wrap: wrap;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 21px;
    cursor: pointer;

    text-align: center;

    color: #272727;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: min(18px, 4vw);
    line-height: 22px;
    cursor: pointer;

    color: #272727;
  }
`

export const ContainerLinkProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`

export const ContainerLinkInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`

export const ContainerLinkSocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`
