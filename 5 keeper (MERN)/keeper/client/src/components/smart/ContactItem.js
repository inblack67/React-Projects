import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import M from 'materialize-css/dist/js/materialize.min.js';

const ContactItem = ({ contact, contact: { name, email, _id, phone, type } }) => {


  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
    M.toast({ html: 'Contact Deleted' });
  }

  const onEdit = () => {
    setCurrent(contact);
  }

  return (

    <div>
      <li>

      <div className="card black">
        <div className="card-content white-text">
          <span className="card-title">{name}</span>
          <ul>
            <br/>

            <li><i className="material-icons left">email</i>{email}</li>
            <br/>
            <li><i className="material-icons left">phone</i>{phone}</li>
            <br/>
            <li>

              {type === 'personal' && <i className="material-icons left">forum</i>}

              {type === 'professional' && <i className="material-icons left">work</i>}

              {type.charAt(0).toUpperCase() + type.slice(1)}</li>
          </ul>
        </div>

        <div className="card-action">
          <a href="#!" onClick={onEdit}>Edit</a>
          <a href="#!" onClick={onDelete}>Delete</a>
        </div>
      </div>

      </li>
    </div>
  )
}

export default ContactItem
