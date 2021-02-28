import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Button } from '../Button'

const About = () =>  {
    const { astronautImage } = useStaticQuery(
    graphql`
      query {
        astronautImage: file(relativePath: { eq: "astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 480) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <AboutContainer>
      <AboutImage fluid={astronautImage.childImageSharp.fluid} />
      <AboutContent>
        <AboutTitle>Sagittarius</AboutTitle>
        <AboutText>Somos uma agência especializada em negócios digitais. Nascemos com a proposta de desenvolver e potencializar negócios digitais através de soluções simples. Nos especializamos no mercado digital criando páginas de vendas e sites para vários especialistas e produtores, além de cuidar de toda infraestrutura de diversos lançamentos. Agora quero ajudar você a potencializar seu negócio!</AboutText>
        {/* <Button primary target='_blank' href="https://api.whatsapp.com/send?phone=5521997938851&text=Ol%c3%a1!+Vi+o+seu+site+e+gostaria+de+fazer+um+orçamento!">Quero potencializar meu negócio!</Button> */}
      </AboutContent>
    </AboutContainer>
  )
}

export default About


const AboutContainer = styled.section`
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

const wind = keyframes`
  0% {
    transform: rotate( 
      0deg
    );
  }
  25% {
    transform: rotate( 
      1deg
    );
  }
  75% {
    transform: rotate( 
      -1deg
    );
  }
`

const AboutImage = styled(Img)`
  width: 65%;
  animation: 3s Infinite  linear ${wind};

  @media screen and (min-width: 768px) {
    width: 35%;
    margin-left: 2rem;
  }
`

const AboutContent = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

const AboutTitle = styled.h2`
  margin-bottom: 1rem;
  font-family: 'Quantify';
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  /* text-transform: uppercase; */
  letter-spacing: 0.25rem;
`

const AboutText = styled.p`
  margin-bottom: 1.5rem;
  font-size: clamp(1rem, 3vw, 1.25rem);
  line-height: 1.75rem;
`