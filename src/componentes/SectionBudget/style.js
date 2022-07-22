import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 17px;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: min(32px, 8.5vw);
  line-height: 39px;

  color: #272727;
`

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: min(18px, 4vw);
  line-height: 22px;

  text-align: center;

  color: #797979;
`
