import PropTypes from "prop-types"
import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import GlobalStyle from '../styles/GlobalStyles'

// import Header from "./Header"
// import "./layout.css"

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
    <LayoutContainer>
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <main>{children}</main>
      <Footer>
        © 2023 Agência Sagittarius
      </Footer>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Footer = styled.footer`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: var(--white);
`