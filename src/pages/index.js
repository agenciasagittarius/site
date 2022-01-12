import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Portfoil from "../components/Portfoil"
import Customers from "../components/Customers"
import About from "../components/About"
import Launch from "../components/Launch"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Agência Sagittarius" />
    <Hero />
    <Services />
    <Portfoil />
    <Launch />
    <Testimonials />
    <About />
    <Customers />
    <Contact />
  </Layout>
)

export default IndexPage
