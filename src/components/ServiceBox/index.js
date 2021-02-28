import React from 'react'
import styled from 'styled-components'

const ServiceBox = ({title, description, image}) => {
  return (
    <ServiceContainer>
      <ServiceImageBox>
        <ServiceImage src={image} alt="Icone do Serviço"/>
      </ServiceImageBox>
      <ServiceTitle>{title}</ServiceTitle>
    </ServiceContainer>
  )
}

export default ServiceBox

const ServiceContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background: rgba(0, 0, 0, 0.2);
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all .5s;

  &:hover{
    transform: translateY(-0.5rem);
    box-shadow: 0.5rem 0.5rem 1rem var(--black);
  }
`

const ServiceImageBox = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
`

const ServiceImage = styled.img`
  width: 100%;
`

const ServiceTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 2rem;
`