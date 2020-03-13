import React, { useState, useContext, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import AuthContext from '../../../context/auth/authContext'

const Register = (props) => {

  const authContext = useContext(AuthContext)

  const { register, error, clearErrors, isAuthenticated } = authContext

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
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
  }, [error, isAuthenticated, props.history])

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {

    e.preventDefault();

    if(password !== password2)
    {
      return M.toast({ html: 'Passwords must match' });
    }

    register({
      name, email, password
    });
  }

  const { name, email, password, password2 } = user;

  return (

    <div className="container">
      <h4>Register</h4>

    <form onSubmit={onSubmit}>

      <div className="input-field">
        <input type="text" name="name" value={name} onChange={onChange} className="validate" required/>
        <span className="helper-text" data-error="Name is a must">Name</span>
      </div>

      <div className="input-field">
        <input type="email" name="email" value={email} onChange={onChange} className="validate" required/>
        <span className="helper-text" data-error="Valid Email is a must">Email</span>
      </div>


      <div className="input-field">
        <input type="password" name="password" value={password} onChange={onChange} className="validate" required minLength="6" />
        <span className="helper-text" data-error="Password is a must">Password</span>
      </div>


      <div className="input-field">
        <input type="password" name="password2" value={password2} onChange={onChange} className="validate" required minLength="6" />
        <span className="helper-text" data-error="Passwords must match">Confirm Password</span>
      </div>

      <br/>


      <input type="submit" value="Register" className="btn red"/>

    </form>


    </div>
  )
}

export default Register
