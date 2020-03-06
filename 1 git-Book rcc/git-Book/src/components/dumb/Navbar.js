import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {

    return (
      <nav>
        <div className="nav-wrapper">
          <a href="www.github.com" className="brand-logo">
            <i className="fa fa-github"></i>
            {title}
          </a>
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