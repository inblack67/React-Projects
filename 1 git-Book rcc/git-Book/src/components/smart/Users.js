import React, { Component } from 'react';
import UserItem from './UserItem';

export default class Users extends Component {

  state = { users: [
    {
    id: 1,
    login: 'inblack67',
    avatar_url: 'https://avatars1.githubusercontent.com/u/52538520?v=4',
    html_url: 'https://github.com/inblack67'
    },
    {
      id: 2,
    login: 'inblack67',
    avatar_url: 'https://avatars1.githubusercontent.com/u/52538520?v=4',
    html_url: 'https://github.com/inblack67'
    },
    {
      id: 3,
    login: 'inblack67',
    avatar_url: 'https://avatars1.githubusercontent.com/u/52538520?v=4',
    html_url: 'https://github.com/inblack67'
    }
  ]
}

  render() {


    const { users } = this.state;

    return (
      <div>
        {users.map(user => (
          <UserItem user={user} key={user.id}/>
        ))}
      </div>
    )
  }
}
