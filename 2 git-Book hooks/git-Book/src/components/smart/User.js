import React, { useEffect } from 'react'
import Preloader from '../dumb/Preloader';
import Repos from './repos/Repo'
import PropTypes from 'prop-types'


const User = ({ user, loading, repos, getRepos, getSingleUser, match }) => {

  useEffect(() => {
    getSingleUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    if(loading)
    {
      return <Preloader />
    }

    return (
      <div>
        <h1>{user.name}</h1>

        <hr/>

        <h3>Repos</h3>
        <Repos repos={repos}/>


      </div>

    )
}


User.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  repos: PropTypes.array.isRequired,
}


export default User;