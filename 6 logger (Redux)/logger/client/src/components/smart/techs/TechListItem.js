import React from 'react'
import PropTypes from 'prop-types'


const TechListItem = ({ tech }) => {
  return (
    <li className="collection-item">{tech.fullName}

    <a href="#!" className="secondary-content grey-text">
      <i className="material-icons">delete</i>
    </a>
    
    </li>
  )
}

TechListItem.propTypes = {
  tech: PropTypes.object.isRequired,
}

export default TechListItem
