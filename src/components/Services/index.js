import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import { servicesItems } from './content'

const Services = () =>  (
  <ServicesContainer>
    <ServicesTitle>O que fazemos</ServicesTitle>
    <ServicesContent>
      {servicesItems.map((item, index) => (
        <Card 
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          color
        />
      ))}
    </ServicesContent>
  </ServicesContainer>
)

export default Services

const ServicesContainer = styled.section`
  background: var(--black);
  padding: 4rem calc((100vw - 1280px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--white);

  @media screen and (min-width: 768px) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`

const ServicesTitle = styled.h2`
  margin-bottom: 1rem;
  font-family: 'Quantify';
  text-align: center;
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  letter-spacing: 0.25rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 2rem;
  }
`

const ServicesContent = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
