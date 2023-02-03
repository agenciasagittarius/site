import React from "react"

import About from "../components/About"
import Customers from "../components/Customers"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Portfoil from "../components/Portfoil"
import Seo from "../components/seo"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Agência Sagittarius" />
    <Hero />
    <Services />
    <Portfoil />
    {/* <Launch /> */}
    <Customers />
    <Testimonials />
    <About />
    {/* <Contact /> */}
  </Layout>
)

export default IndexPage
