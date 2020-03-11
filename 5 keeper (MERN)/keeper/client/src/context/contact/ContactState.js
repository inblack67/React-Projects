import React, { useReducer } from 'react'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT } from '../types'

const ContactState = (props) => {

  const initialState = {

    contacts: [
      {
        id: 1,
        name: 'John',
        email: "john@gmail.com",
        phone: '123-456-789',
        type: 'professional'
      },
      {
        id: 2,
        name: 'Mary',
        email: "mary@gmail.com",
        phone: '123-456-789',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Sherlock',
        email: "sherly@gmail.com",
        phone: '123-456-789',
        type: 'professional'
      }
    ],
    current: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact
  const addContact = contact => {

    contact.id = Math.floor(Math.random() * 10000);

    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  }

  // delete contact

  const deleteContact = (id) => {
    dispatch({ 
      type: DELETE_CONTACT,
      payload: id
    });
  }

  // set current contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    });
  }

  // clear current contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  }

  // update contact
  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  }

  // filter 

  // clear filter

  return (
    <ContactContext.Provider value={{
      contacts: state.contacts,
      current: state.current,
      addContact,
      deleteContact,
      setCurrent,
      clearCurrent,
      updateContact
    }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
