import React, { useEffect, useContext } from 'react'
import Repos from './repos/Repo'
import GithubContext from '../../context/github/githubContext'


const User = ({ match }) => {

  useEffect(() => {
    getSingleUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const githubContext = useContext(GithubContext);

  const { getSingleUser, user, getRepos, repos } = githubContext

    // if(loading)
    // {
    //   return <Preloader />
    // }

    return (
      <div>
        <h1>{user.name}</h1>
        <hr/>
        <h3>Repos</h3>
        <Repos repos={repos}/>
      </div>

    )
}


export default User;