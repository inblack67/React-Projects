import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contact = () => {

  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
      <ul className="collection">
      { contacts.map(contact => <ContactItem contact={contact} key={contact.id}/>) }
      </ul>
  )
}

export default Contact
