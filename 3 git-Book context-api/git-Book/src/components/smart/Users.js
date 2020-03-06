import React, { useContext } from 'react';
import UserItem from './UserItem';
import Preloader from '../dumb/Preloader';
import GithubContext from '../../context/github/githubContext';


const Users = () => {

    const githubContext = useContext(GithubContext);

    const { users,loading } = githubContext;

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


export default Users;