import React from 'react'

import { Button } from '../Button'
import { Container, Title, Text } from './style'

export const SectionBudget = () => {
  return (
    <Container id="Budget">
      <Title>Orçamento</Title>
      <Text>
        Está interessado em entrar em contato com um dos nossos profissionais?
      </Text>
      <Button Budget>Entre em Contato</Button>
    </Container>
  )
}
