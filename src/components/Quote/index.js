import React from 'react'
import styled from 'styled-components'

const Quote = ({ image, name, office, text}) => (
  <QuoteContainer>
    <QuoteText>{ text }</QuoteText>
    <QuoteInfos>
      <QuoteName>{ name }</QuoteName>
      <QuoteJob>{ office }</QuoteJob>
      <QuoteImage src={image} alt="Foto do Cliente" />
    </QuoteInfos>
  </QuoteContainer>
)

export default Quote


const QuoteContainer = styled.div`
  width: calc(100% - 32px);
  max-width: 360px;
  background: rgba(0, 0, 0, 0.2);
  margin: 1rem 1rem 3rem;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  box-shadow: 0.5rem 0.5rem 1rem var(--black);
`

const QuoteText = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1.25rem;
  position: relative;
  bottom: -1.25rem;

  &::before, &::after{
    content: '"';
  }
`

const QuoteInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: -3rem;
`

const QuoteName = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.25rem;
`

const QuoteJob = styled.p`
  margin-bottom: .5rem;
  font-size: .75rem;
  text-align: center;
  line-height: 1rem;
`

const QuoteImage = styled.img`
  width: 4rem;
  border-radius: 50%;
  box-shadow: 0rem 0.5rem .5rem var(--black);
`