import React from 'react'
import styled from 'styled-components'
import CardLightBox from '../CardLightBox'
import ShapeTop from '../ShapeTop'
import ShapeBottom from '../ShapeBottom'
import { portfoilItems } from './content'
import { Button } from '../Button'

import Whatsapp from '../../assets/icons/whatsapp.svg'

const Portfoil = () =>  (
  <PortfoilContainer>
    <ShapeTop />
    <PortfoilTitle>Confira alguns dos nossos trabalhos</PortfoilTitle>
    <PortfoilContent>
      {portfoilItems.map((item, index) => (
        <CardLightBox 
          onlyTitle
          key={index}
          title={item.title}
          image={item.image}
          imageFull={item.imageFull}
          alt={"Página do projeto "+item.title}
        />
      ))}
    </PortfoilContent>
    <Button primary target='_blank' href="https://api.whatsapp.com/send?phone=5521979884442&text=Ol%c3%a1!+Vi+o+seu+site+e+gostaria+de+fazer+um+orçamento!">
      <Whatsapp />
      Solicitar um Orçamento
    </Button>
    <ShapeBottom />
  </PortfoilContainer>
)

export default Portfoil

const PortfoilContainer = styled.section`
  background: linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%);
  padding: 8rem calc((100vw - 1280px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--white);
`

const PortfoilTitle = styled.h2`
  margin: 2rem 0;
  font-family: 'Quantify';
  text-align: center;
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  letter-spacing: 0.25rem;
`

const PortfoilContent = styled.div`
margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
