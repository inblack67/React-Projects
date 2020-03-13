import React, { useContext, useEffect } from 'react'
import Contact from '../smart/Contact'
import ContactForm from '../smart/ContactForm'
import ContactFilter from '../smart/ContactFilter'
import AuthContext from '../../context/auth/authContext'
import Preloader from './Preloader'

const Home = () => {

  const authContext = useContext(AuthContext)

  const { loadUser, loading } = authContext

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  },[]);

  if(loading)
  {
    return <Preloader />
  }

  

  return (
    <div className="row">
      <div className="col s6">
      <ContactForm />
      </div>
      <div className="col s6">
      <ContactFilter />
      <Contact />
      </div>
    </div>
  )
}

export default Home
