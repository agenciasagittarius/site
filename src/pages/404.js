import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"

import image404 from "../assets/images/404.svg"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container>
      <Image src={image404} />
    </Container>
  </Layout>
)

export default NotFoundPage


const Container = styled.section`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  width: 80%;
  max-width: 500px;
  margin: 4rem 0;
`