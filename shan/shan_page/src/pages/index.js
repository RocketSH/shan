import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="landing1" className="landing_section">
      <nav className="menu"></nav>
      <div className="landing__hero container">
        <h1>THE ADVENTURE STARTS RIGHT OUTSIDE YOUR DOOR.</h1>
        <p>Have you ever seen a sky full of stars on top of a mountain?</p>
        <a href="#" className="landing__cta">
          explore now!
        </a>
      </div>
    </section>
  </Layout>
)

export default IndexPage
