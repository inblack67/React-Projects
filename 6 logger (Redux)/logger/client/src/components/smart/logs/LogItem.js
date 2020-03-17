import React from 'react'
import PropTypes from 'prop-types'


const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'green-text'}`}>{ log.message }</a>
      <br/>
      <span className="helper-text blue-text">
       Last Updated By { log.techName } on { log.createdAt }
      </span>
      <a href="#!" className="secondary-content grey-text"><i className="material-icons">delete</i></a>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
}

export default LogItem
