import React, { useReducer } from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
import { REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERRORS, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types'
import axios from 'axios'
import setAuthToken from '../../setAuthToken'

const AuthState = (props) => {

  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  // load user
  const loadUser = async () => {

    if(localStorage.token)
    {
      setAuthToken(localStorage.token);
    }

    try {
      
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data.data
    })

    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      })
    }
  }

  // register user
  const register = async (formData) => {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/users', formData, config)

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      loadUser();

    } catch (err) {

      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.error
      });
    }

  }

  // login user
  const login = async (formData) => {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/auth', formData, config)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();

    } catch (err) {

      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.error
      });
    }

  }

  // logout
  const logout = () => {
    dispatch({
      type: LOGOUT
    });
  }


  // clear error
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS
    })
  }

  return (

    <AuthContext.Provider value={{
      token: state.token,
      user: state.user,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      error: state.error,
      register,
      clearErrors,
      loadUser,
      login,
      logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
