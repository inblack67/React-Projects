import React, { useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'
import Preloader from '../dumb/Preloader'

const Contact = () => {

  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  },[]);

  if(loading || !contacts)
  {
    return <Preloader />
  }

  if(contacts && contacts.length === 0 && !loading)
  {
    return <p className="flow-text">No Contacts Listed</p>
  }


  return (

      <ul className="collection">

        { filtered ? filtered.map(contact => (
        <ContactItem contact={contact} key={contact._id}/>
      ))  : contacts.map(contact => <ContactItem contact={contact} key={contact._id}/>).sort().reverse()  }

      </ul>
  )
}

export default Contact
