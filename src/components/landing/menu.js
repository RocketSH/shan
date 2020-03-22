import React from "react"
import { Link } from "gatsby"
import Logo from "../logo"

export default () => (
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
)
