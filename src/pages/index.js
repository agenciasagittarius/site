import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Launch from "../components/Launch"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <Launch />
    <Testimonials />
    <Contact />
  </Layout>
)

export default IndexPage
