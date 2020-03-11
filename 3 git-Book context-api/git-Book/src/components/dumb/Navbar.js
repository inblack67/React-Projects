import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {

    return (
      <nav>
        <div className="navbar-fixed">
        <div className="nav-wrapper blue darken-2">

        <a className="brand-logo social github" href="/">
          <i className="fa fa-github material-icons large"></i> 
          {title}
          </a>

          <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
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