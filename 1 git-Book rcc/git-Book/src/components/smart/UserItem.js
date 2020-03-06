import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const UserItem = ( { user: { avatar_url, html_url, login } } ) => {

    return (
      <div className="col s6">
        <div className="container">
         <div className="card">
          <div className="card-image">
            <img src={avatar_url} alt="" style={{width: '100px'}}/>
          </div>
          <div className="card-content">
            <Link to={`/user/${login}`} className="btn green">
              Explore
            </Link>
          </div>
        </div>
      </div>
      </div>
    )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem;
