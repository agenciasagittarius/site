import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import GlobalStyle from '../styles/GlobalStyles'

// import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()} Agência Sagittarius
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


const Footer = styled.footer`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: 'Quantify'; */
  font-size: 1rem;
  color: var(--white);
`