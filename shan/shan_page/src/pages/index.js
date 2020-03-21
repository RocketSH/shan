import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <nav className="menu">
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
        <div className="menu__right">
          <Link to="#">Home</Link>
          <Link to="#">Tours</Link>
          <Link to="#">Accommodation</Link>
          <Link to="#">Sights</Link>
          <Link to="#" className="menu__cta">
            Make a booking
          </Link>
        </div>
      </div>
    </nav>
    <section id="landing1" className="landing_section">
      <div className="landing__hero container">
        <h1>THE ADVENTURE STARTS RIGHT OUTSIDE YOUR DOOR.</h1>
        <p>Have you ever seen a sky full of stars on top of a mountain?</p>
        <Link to="#" className="landing__cta">
          explore now!
        </Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage
