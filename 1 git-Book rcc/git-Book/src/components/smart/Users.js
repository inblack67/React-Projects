import React from 'react';
import UserItem from './UserItem';
import Preloader from '../dumb/Preloader';
import PropTypes from 'prop-types'


const Users = ({ users,loading }) => {

    if(loading)
    {
      return <Preloader />
    }

    else
    {
      return (
        <div className="row">
          {users.map(user => (
            <UserItem user={user} key={user.id}/>
          ))}
        </div>
      )
    }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}


export default Users;