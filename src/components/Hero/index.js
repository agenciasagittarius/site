import React from 'react'
import styled from 'styled-components'

import Video from '../../assets/videos/stars.mp4'
import Logo from '../../assets/images/logo.png'
import { Button } from '../Button'

import Whatsapp from '../../assets/icons/whatsapp.svg'

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
    <HeroLogo src={Logo} draggable="false" />
      <HeroTitle>
        Sites e Landing Pages profissionais e de maneira personalizada!
      </HeroTitle>
      <HeroText>
        Tenha mais resultados com seu negócio no digital com soluções feitas sob medida.
      </HeroText>
      <Button primary big target='_blank' href="https://api.whatsapp.com/send?phone=5521979884442&text=Ol%c3%a1!+Vi+o+seu+site+e+gostaria+de+fazer+um+orçamento!">
        <Whatsapp />
        Entre em contato
      </Button>
    </HeroContent>
    <HeroShapeBottom>
      <HeroShapeBottomSVG data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <HeroShapeBottomFill d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" />
      </HeroShapeBottomSVG>
    </HeroShapeBottom>
  </HeroContainer>
)

export default Hero

const HeroContainer = styled.section`
  min-height: 100vh;
  background: var(--black);
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

  @media screen and (min-width: 768px) {
    min-height: 80vh;
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
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
`

const HeroContent = styled.div`
  max-height: 100%;
  width: 100%;
  max-width: 800px;
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
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.25rem;
  line-height: 2rem;

  @media screen and (min-width: 768px) {
    font-size: clamp(2rem, 3.5vw, 2.5rem);
    line-height: 2.75rem;
  }
`

const HeroText = styled.p`
  margin-bottom: 3rem;
  padding: 0 1rem;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  text-align: center;
  line-height: clamp(1.5rem, 2.5vw, 2rem);
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
