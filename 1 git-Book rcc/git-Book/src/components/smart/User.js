import React, { Component } from 'react'
import Preloader from '../dumb/Preloader';
import Repos from './repos/Repo'
import PropTypes from 'prop-types'


export default class User extends Component {

  componentDidMount()
  {
    this.props.getSingleUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }

  render() {

    const { user, loading, repos } = this.props;

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
}


User.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  repos: PropTypes.array.isRequired,
}