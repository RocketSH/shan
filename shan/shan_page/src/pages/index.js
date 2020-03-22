import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/landing/hero"
import Menu from "../components/landing/menu"
import Section2 from "../components/landing/section2"
import Section3 from "../components/landing/section3"
import Section4 from "../components/landing/section4"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <Hero />
    <Section2 />
    <Section3 />
    <Section4 />
  </Layout>
)

export default IndexPage
