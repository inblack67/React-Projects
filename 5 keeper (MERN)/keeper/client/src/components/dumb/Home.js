import React from 'react'
import Contact from '../smart/Contact'
import ContactForm from '../smart/ContactForm'

const Home = () => {
  return (
    <div className="row">
      <div className="col s6">
      <ContactForm />
      </div>
      <div className="col s6">
      <Contact />
      </div>
    </div>
  )
}

export default Home
