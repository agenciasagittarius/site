import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from 'react'
import styled, { keyframes } from 'styled-components'

const About = () => {
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
        <AboutTitle>
          Sobre a Sagittarius
        </AboutTitle>
        <AboutText>
          Somos uma agência especializada no desenvolvimento de sites e sistemas. Nascemos com a proposta de desenvolver e potencializar negócios, através de soluções personalizadas.
        </AboutText>
        <AboutText>
          Temos ampla experiência no mercado digital, desenvolvemos páginas de vendas e sites para diversos especialistas e produtores, além de cuidar de toda infraestrutura de lançamento. Agora queremos ajudar você a potencializar seu negócio!
        </AboutText>
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
      5deg
    );
  }
  75% {
    transform: rotate( 
      -5deg
    );
  }
`

const AboutImage = styled(Img)`
  width: 65%;
  animation: 6s Infinite  linear ${wind};

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