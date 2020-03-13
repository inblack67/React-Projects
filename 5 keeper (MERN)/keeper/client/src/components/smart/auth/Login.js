import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../../context/auth/authContext'
import M from 'materialize-css/dist/js/materialize.min.js';

const Login = (props) => {

  const authContext = useContext(AuthContext);

  const { login, isAuthenticated, error, clearErrors } = authContext

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {

    if(isAuthenticated)
    {
      // redirect to dashboard
      props.history.push('/');
    }

    if(error)
    {
      M.toast({ html: error });
    }

    clearErrors();
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);


  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
    e.preventDefault();
    login({
      email, password
    });
  }

  const { email, password} = user;

  return (

    <div className="container">
      <h4>Login</h4>

    <form onSubmit={onSubmit}>

      <div className="input-field">
        <input type="email" name="email" value={email} onChange={onChange} className="validate"/>
        <span className="helper-text" data-error="Valid Email is a must">Email</span>
      </div>


      <div className="input-field">
        <input type="password" name="password" value={password} onChange={onChange} className="validate"/>
        <span className="helper-text" data-error="Password is a must">Password</span>
      </div>

      <br/>

      <input type="submit" value="Login" className="btn red"/>

    </form>

    </div>
  )
}

export default Login
