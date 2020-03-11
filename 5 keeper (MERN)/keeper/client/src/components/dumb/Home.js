import React from 'react'
import Contact from '../smart/Contact'
import ContactForm from '../smart/ContactForm'
import ContactFilter from '../smart/ContactFilter'

const Home = () => {
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
