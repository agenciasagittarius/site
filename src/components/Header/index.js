import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'

import { menuContent } from './content'

const Header = ({ siteTitle }) => (
  <Nav>
    <NavLink to="/">
      {siteTitle}
    </NavLink>
    <Bars />
    <NavMenu>
      {menuContent.map((item, index) => (
        <NavLink to={item.link} key={index}>
          {item.title}
        </NavLink>
      ))}
    </NavMenu>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Nav = styled.header`
  height: 80px;
  /* background: red; */
  padding: 0.5rem calc((100vw - 1280px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: -webkit-sticky; */
  position: relative;
  top: 0;
  z-index: 100;
`

const NavLink = styled(Link)`
  height: 100%;
  padding: 0 1rem;
  font-size: 1.25rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  /* &:hover {
    color: 
  } */
`

const Bars = styled(FaBars)`
  display: block;
  font-size: 2rem;
  color: var(--white);
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`


const NavMenu = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

`