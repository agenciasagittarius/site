import React from 'react'
import styled from 'styled-components'
import contactimage from '../../assets/images/contact.svg'
import { HiOutlineMail as Email } from 'react-icons/hi'
import { SiWhatsapp as Whatsapp } from 'react-icons/si'
import { AiOutlineInstagram as Insta } from 'react-icons/ai'

const Contact = () => (
  <ContactContainer>
    <ContactTitle>Entre em Contato</ContactTitle>
    <ContactContent>
      <ContactImage src={contactimage} />
      <ContactInfos>
        <ContactInfo href='mailto:contato@agenciasagittarius.com.br'>
          <Email />
          <ContactInfoText>contato@agenciasagittarius.com.br</ContactInfoText>
        </ContactInfo>
        <ContactInfo target='_blank' href='https://api.whatsapp.com/send?phone=5521997938851&text=Ol%c3%a1!+Vi+o+seu+site+e+gostaria+de+fazer+um+orçamento!'>
          <Whatsapp />
          <ContactInfoText>(21) 99793-8851</ContactInfoText>
        </ContactInfo>
        <ContactInfo target='_blank' href='https://www.instagram.com/agencia.sagittarius/'>
          <Insta />
          <ContactInfoText>agencia.sagittarius</ContactInfoText>
        </ContactInfo>
        <ContactForm name="Contact Form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="Contact Form" />
          <ContactInput type="text" name="name" placeholder="Nome" />
          <ContactInput type="email" name="email" placeholder="E-mail" />
          <ContactTextArea name="message" placeholder="Sua mensagem" rows="3" />
          <ContactButton type="submit">Enviar</ContactButton>
        </ContactForm>
      </ContactInfos>
    </ContactContent>
  </ContactContainer>
)

export default Contact


const ContactContainer = styled.section`
  background: var(--black);
  padding: 4rem calc((100vw - 1280px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
`

const ContactTitle = styled.h2`
  margin-bottom: 2rem;
  font-family: 'Quantify';
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 0.25rem;
`

const ContactContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const ContactImage = styled.img`
  width: 75%;
  max-width: 500px;
  margin-bottom: 2rem;
  transform: scaleX(-1);
`

const ContactInfos = styled.div`
  width: 100%;    
  max-width: 500px;    
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }
`


const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ContactInfo = styled.a`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  color: var(--white);

  svg {
    font-size: 1.5rem;

    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }
  }
`

const ContactInfoText = styled.p`
  padding-left: .5rem;
  font-size: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const ContactInput = styled.input`
  width: 100%;
  max-width: 420px;
  background: none;
  border: none;
  border-bottom: solid var(--purple) 2px;
  margin-bottom: 1rem;
  padding: .75rem;
  font-size: 1rem;
  color: var(--white);
  transition: all 0.3s ease-in;

  &:hover , &:focus{
    border-bottom: solid var(--primary) 2px;
  }
`

const ContactTextArea = styled.textarea`
  width: 100%;
  max-width: 420px;
  background: none;
  border: none;
  border-bottom: solid var(--purple) 2px;
  margin-bottom: 1rem;
  padding: .75rem;
  font-size: 1rem;
  color: var(--white);
  resize: none;
  transition: all 0.3s ease-in;

  &:hover , &:focus{
    border-bottom: solid var(--primary) 2px;
  }
`

const ContactButton = styled.button`
  min-width: 120px;
  background: none;
  border: 2px solid var(--purple);
  border-radius: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  outline: none; 
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover{
    border: 2px solid var(--primary);
    color: var(--primary);
    transform: translateY(-0.25rem);
    box-shadow: 0.5rem 0.5rem 1rem var(--black);
  }
`