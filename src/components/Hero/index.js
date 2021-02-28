import React from 'react'
import styled from 'styled-components'

import Video from '../../assets/videos/stars.mp4'
import Logo from '../../assets/images/logo.png'
import { Button } from '../Button'

const Hero = () => (
  <HeroContainer>
    <HeroBg>
      <VideoBg 
        src={Video} 
        type="video/mp4"
        autoPlay
        loop
        muted
      />
    </HeroBg>
    <HeroContent>
    <HeroLogo src={Logo} />
      <HeroTitle>Utilize a tecnologia para ter resultados de outro mundo!</HeroTitle>
      <HeroText>Tenha um site mais profissional e consiga mais visibilidade e mais clientes, aumentando o seu faturamento.</HeroText>
      <Button primary big target='_blank' href="https://api.whatsapp.com/send?phone=5521997938851&text=Ol%c3%a1!+Vi+o+seu+site+e+gostaria+de+fazer+um+orçamento!">Solicitar Orçamento!</Button>
    </HeroContent>
    <HeroShapeBottom>
      <HeroShapeBottomSVG data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <HeroShapeBottomFill d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></HeroShapeBottomFill>
      </HeroShapeBottomSVG>
    </HeroShapeBottom>
  </HeroContainer>
)

export default Hero

const HeroContainer = styled.section`
  height: 100vh;
  background: var(--black);
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--white);

  ::before {
    content: "";
    background: linear-gradient(135deg, rgba(31, 58, 147, 0.4) 0%, rgba(102, 51, 153, 0.4) 100%);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 3;
  }
`

const HeroBg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
`

const VideoBg = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroLogo = styled.img`
  width: 360px;
  margin-bottom: 4rem;
  /* position: absolute;
  top: 4rem;   */
  /* z-index: 5; */
`

const HeroContent = styled.div`
  /* height: calc(100vh - 80px); */
  max-height: 100%;
  width: 100%;
  max-width: 690px;
  /* margin-top: 80px; */
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
`

const HeroTitle = styled.h1`
  margin-bottom: 1rem;
  font-family: 'Quantify';
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.25rem;
  line-height: 2.75rem;
`

const HeroText = styled.p`
  margin-bottom: 3rem;
  padding: 0 1rem;
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 400;
  text-align: center;
  line-height: clamp(1.5rem, 2vw, 2rem);
`

const HeroShapeBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 10;
`

const HeroShapeBottomSVG = styled.svg`
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 64px;
`

const HeroShapeBottomFill = styled.path`
  fill: var(--black);
`