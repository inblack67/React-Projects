import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = ({ title }) => {
  return (
    <nav className="black">
      <div className="nav-wrapper">
        <div className="navbar-fixed">
          <a href="#!" className="brand-logo"><i className="material-icons">phonelink_lock</i> Keeper</a>

          <ul className="nav-mobile right hide-on-small-only">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Keeper"
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar
