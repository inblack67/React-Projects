import React, { useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'


const Navbar = ({ title }) => {

  const authContext = useContext(AuthContext)
  const contactContext = useContext(ContactContext)

  const { isAuthenticated, logout } = authContext
  const { clearContacts } = contactContext

  const onLogOut = e => {
    logout();
    clearContacts();
  }

  const authLinks = 
  <Fragment>
      <li><a href="#!" onClick={onLogOut}>Logout</a></li>
  </Fragment>

const guestLinks = 
  <Fragment>
    <li><Link to="/register">Register</Link></li>
    <li><Link to="/login">Login</Link></li>
  </Fragment>

  return (
    <nav className="black">
      <div className="nav-wrapper">
        <div className="navbar-fixed">
          <a href="#!" className="brand-logo"><i className="material-icons">phonelink_lock</i> Keeper</a>

          <ul className="nav-mobile right hide-on-small-only">
            { isAuthenticated ? authLinks : guestLinks }
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
