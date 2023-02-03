import React from 'react'
import styled from 'styled-components'
import bndes from '../../assets/images/customers/bndes.svg'
import cetuc from '../../assets/images/customers/cetuc.png'
import gamejamplus from '../../assets/images/customers/gamejamplus.svg'
import indiehero from '../../assets/images/customers/indiehero.svg'
import xphere from '../../assets/images/customers/xphere.svg'

const Customers = () => (
  <CustomersContainer>
    <CustomersTitle>Alguns clientes</CustomersTitle>
    <CustomersContent>
      <CustomersLogo src={gamejamplus} alt="" draggable="false" />
      <CustomersLogo src={indiehero} alt="" draggable="false" />
      <CustomersLogo src={xphere} alt="" draggable="false" />
      <CustomersLogo src={cetuc} alt="" draggable="false" />
      <CustomersLogo src={bndes} alt="" draggable="false" />
    </CustomersContent>
  </CustomersContainer>
)

export default Customers

const CustomersContainer = styled.section`
  /* background: linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%); */
  background: var(--white);
  padding: 4rem calc((100vw - 1280px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const CustomersLogo = styled.div`
  width: 120px;
  height: 120px;
  margin: 1rem 2rem;
  background-image: ${({ src }) => ("url(" + src + ")")};
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
  background: linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  font-family: 'Quantify';
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.25rem;
`
