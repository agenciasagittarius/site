import React from 'react'
import styled from 'styled-components'
import LightBox from '../LightBox'

const CardLightBox = ({title, description, image, imageFull, alt, color, onlyTitle}) => {
  return (
    <LightBox src={imageFull} alt={alt}>
      <CardContainer 
        color={color ? 'true' : 'false'} 
        onlyTitle={onlyTitle ? 'true' : 'false'}
      >
        <CardImageBox>
          <CardImage src={image} alt={alt} draggable="false" />
        </CardImageBox>
        <CardTitle>{title}</CardTitle>
        {description ? <CardText>{description}</CardText> : ''}
      </CardContainer>
    </LightBox>
  )
}

export default CardLightBox

const CardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background: ${({color}) => (color === "true" ? 'linear-gradient(135deg, var(--blueTransparent) 0%, var(--purpleTransparent) 100%)' : 'rgba(0,0,0,0.2)')};
  margin: 1rem;
  padding: ${({onlyTitle}) => (onlyTitle === "true" ? '1rem 1.5rem .5rem' : '1rem 1.5rem 1.5rem')};
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

const CardImageBox = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
`

const CardImage = styled.img`
  width: 100%;
`

const CardTitle = styled.h3`
  margin: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 2rem;
`

const CardText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.25rem;
`
