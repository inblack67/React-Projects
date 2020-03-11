import React, { useContext, useState } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {

  const [text, setText] = useState('');

  const contactContext = useContext(ContactContext);

  const { filterContacts, clearFilter } = contactContext

  const onChange = e => {

    setText(e.target.value);

    if(text)
    {
      filterContacts(text)
    }
    else
    {
      clearFilter();
    }
  }


  return (
    <form>
      <div className="input-field">
        <input type="text" value={text} onChange={onChange}/>
        <span className="helper-text validate" >Filter Contacts</span>
      </div>
    </form>
  )
}

export default ContactFilter
