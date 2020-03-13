import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'
import M from 'materialize-css/dist/js/materialize.min.js';

const ContactForm = () => {

  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact, loading } = contactContext

  useEffect(() => {
    if(current)
    {
      setContact(current);
    }

    else
    {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }

  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const onChange = e => {
    setContact({...contact, [e.target.name]: e.target.value});
  }

  const { name, email, phone, type } = contact;

  const onSubmit = e => {

    e.preventDefault();

    if(!current)
    {
      addContact(contact);
      M.toast({ html: 'Contact Added' });
    }

    else
    {
      updateContact(contact);

      if(!loading)
      {
        M.toast({ html: 'Contact Updated Successfully' });
      }
    }

    onClear();
  }

  const onClear = () => {
    clearCurrent();
  }

  return (

    <form onSubmit={onSubmit}>

    {current ? <h4>Edit Contact</h4> : <h4>Add Contact</h4> }
      
      <div className="input-field">
        <input type="text" name="name" onChange={onChange} value={name} className="validate" required/>
        <span className="helper-text" data-error="Name is a must">Name</span>
      </div>

      <div className="input-field">
        <input type="email" name="email" onChange={onChange} value={email} className="validate" required/>
        <span className="helper-text" data-error="Valid Email is a must">Email</span>
      </div>

      <div className="input-field">
        <input type="text" name="phone" onChange={onChange} value={phone} className="validate" required/>
        <span className="helper-text" data-error="Phone is a must">Phone</span>
      </div>

      <label>
        <input name="type" type="radio" value="personal" checked={type === 'personal'} onChange={onChange} className="validate"/>
        <span>Personal</span>
      </label>

      <br/><br/>
      <label>
        <input name="type" type="radio" value="professional" checked={type === 'professional'} onChange={onChange} className="validate"/>
        <span>Professional</span>
      </label>

      <br/><br/>

      <div className="input-field">

        { current ? <input type="submit" value="Update" className="btn green"/> : <input type="submit" value='Add' className="btn green"/>}

  { current && <button className="btn red secondary-content" onClick={onClear}>Clear</button> }
      </div> 


    </form>
  )
}

export default ContactForm
