import React from 'react'
import styled from 'styled-components'
import ServiceBox from '../ServiceBox'
import ShapeTop from '../ShapeTop'
import ShapeBottom from '../ShapeBottom'
import { servicesItems } from './content'
import { Button } from '../Button'

const Services = () =>  (
  <ServicesContainer>
    <ShapeTop />

    <ServicesTitle>O que fazemos</ServicesTitle>
    <ServicesContent>
      {servicesItems.map((item, index) => (
        <ServiceBox 
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </ServicesContent>
    <Button primary target='_blank' href="https://api.whatsapp.com/send?phone=5521979884442&text=Ol%c3%a1!+Vi+o+seu+site+e+gostaria+de+fazer+um+orçamento!">Solicitar um Orçamento!</Button>
    <ShapeBottom />
  </ServicesContainer>
)

export default Services

const ServicesContainer = styled.section`
  background: linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%);
  padding: 8rem calc((100vw - 1280px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--white);
`

const ServicesTitle = styled.h2`
  margin-bottom: 1rem;
  font-family: 'Quantify';
  text-align: center;
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 0.25rem;
`

const ServicesContent = styled.div`
margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
