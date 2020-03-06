import React, { useReducer } from 'react'
import axios from 'axios'
import GithubReducer from './githubReducer'
import GithubContext from './githubContext'
import { SET_LOADING, GET_REPOS, GET_USER, CLEAR_USERS, SEARCH_USERS } from '../types'

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production')
{
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
}

else    // in prod
{
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET
}

const GithubState = (props) => {

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search users
  const searchUsers = async (text) => {

    setLoading();

      const res = await axios(`https://api.github.com/search/users?q=${text}&cliient_id=${githubClientId}&client_secret=${githubClientSecret}`);

      dispatch({ type: SEARCH_USERS, payload: res.data.items });
  }

  // GET a single user
  const getSingleUser = async (username) => {

    setLoading();

    const res = await axios(`https://api.github.com/users/${username}?cliient_id=${githubClientId}&client_secret=${githubClientSecret}`);

    dispatch({ type: GET_USER, payload: res.data });
  }

  // clear users
  const clearUsers = () => {
    setLoading();
    dispatch({ type: CLEAR_USERS });
  }


  // get repos
  const getRepos = async (username) => {

    setLoading();

    const res = await axios(`https://api.github.com/users/${username}/repos?per_page=5&cliient_id=${githubClientId}&client_secret=${githubClientSecret}`);

    dispatch({ type: GET_REPOS, payload: res.data });
  }

  // set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  }

  return (

    <GithubContext.Provider value={{
      users: state.users,
      user: state.user,
      loading: state.loading,
      repos: state.repos,
      searchUsers,
      clearUsers,
      getSingleUser,
      getRepos
    }}>
      { props.children }
    </GithubContext.Provider>

  )
}

export default GithubState
