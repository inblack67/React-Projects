import React from 'react'
import PropTypes from 'prop-types'


const UserItem = ( { user: { avatar_url, html_url, login } } ) => {

    return (
      <div className="container">
        <div className="card">
          <div className="card-image">
            <img src={avatar_url} alt="" style={{width: '100px'}}/>
          </div>
          <div className="card-content">
            <a href={html_url} className="btn green">
              {login}
            </a>
          </div>
        </div>
      </div>
    )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem;
