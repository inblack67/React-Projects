import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <i className="fa fa-github"></i>
            {title}
          </Link>
          <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    )

}

Navbar.defaultProps = {
  title: "git-Book"
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar;