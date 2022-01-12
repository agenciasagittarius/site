import React from 'react'
import styled from 'styled-components'
import ShapeTop from '../ShapeTop'
import ShapeBottom from '../ShapeBottom'
import gamejamplus from '../../assets/images/customers/gamejamplus_white.svg'
import indiehero from '../../assets/images/customers/indiehero_white.svg'
import xphere from '../../assets/images/customers/xphere_white.svg'
// import puc from '../../assets/images/customers/puc.png'
// import nucleomemoria from '../../assets/images/customers/nucleomemoria.svg'

const Customers = () =>  (
  <CustomersContainer>
    <ShapeTop />
    <CustomersTitle>Alguns clientes</CustomersTitle>
    <CustomersContent>
      <CustomersLogo src={xphere} alt="Logo " draggable="false" />
      <CustomersLogo src={indiehero} alt="Logo " draggable="false" />
      <CustomersLogo src={gamejamplus} alt="Logo " draggable="false" />
      {/* <CustomersLogo src={nucleomemoria} alt="Logo " draggable="false" /> */}
      {/* <CustomersLogo src={puc} alt="Logo " draggable="false" /> */}
    </CustomersContent>
    <ShapeBottom />
  </CustomersContainer>
)

export default Customers

const CustomersContainer = styled.section`
  background: linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%);
  padding: 8rem calc((100vw - 1280px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  position: relative;
`

const CustomersLogo = styled.div`
  width: 120px;
  height: 120px;
  margin: 1rem 2rem;
  background-image: ${({src}) => ("url("+src+")")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: all .6s;

  &:hover {
    transform: scale(1.25);
  }
`

const CustomersContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const CustomersTitle = styled.h2`
  margin-bottom: 2rem;
  font-family: 'Quantify';
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.25rem;
`
