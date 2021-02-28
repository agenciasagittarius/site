import React from 'react'
import styled from 'styled-components'
import launch from '../../assets/images/launch.svg'
import { Button } from '../Button'

const Launch = () =>  (
  <LaunchContainer>
    <LaunchImage src={launch} />
    <LaunchContent>
      <LaunchTitle>Infoprodutos</LaunchTitle>
      <LaunchText>Somos especialistas em infraestrutura de lançamentos e perpétuos. Trabalhamos em parceria de diversos experts e co-produtores desenvolvendo desde suas páginas de vendas até sua estrutura de e-mail marketing. Podemos auxiliar no seu projeto mesmo se você estiver começando agora, atuamos como prestadores de serviço ou como co-produtores de acordo com o que fizer mais sentido para o projeto em específico.</LaunchText>
      <Button primary href="#teste">Entrar em Contato</Button>
    </LaunchContent>
  </LaunchContainer>
)

export default Launch

const LaunchContainer = styled.section`
  background: var(--black);
  padding: 4rem calc((100vw - 1280px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const LaunchImage = styled.img`
  width: 75%;

  @media screen and (min-width: 768px) {
    width: 40%;
    padding-left: 2rem;
  }
`

const LaunchContent = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`
const LaunchTitle = styled.h2`
  margin-bottom: 1rem;
  font-family: 'Quantify';
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 0.25rem;
`
const LaunchText = styled.p`
  font-size: clamp(1rem, 3vw, 1.25rem);
  line-height: 1.5rem;
  margin-bottom: 2rem;
`