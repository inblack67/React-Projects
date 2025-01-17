import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER, CONTACT_ERROR, GET_CONTACTS, CLEAR_CONTACTS } from '../types';

export default (state, action) => {
  switch(action.type)
  {
    case ADD_CONTACT: 
    return {
      ...state,
      // copy of state needs to be created since it is immutable
      contacts: [...state.contacts, action.payload],
      loading: false
    }

    case UPDATE_CONTACT: 
    return {
      ...state,
      contacts: state.contacts.map(contact => contact._id === action.payload._id ? action.payload : contact),
      loading: false
    }


    case DELETE_CONTACT: 
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact._id !== action.payload),
      loading: false
    }

    case SET_CURRENT: 
    return {
      ...state,
      current: action.payload
    }

    case CLEAR_CURRENT: 
    return {
      ...state,
      current: null
    }

    case FILTER_CONTACTS: 
    return {
      ...state,
      filtered: state.contacts.filter(contact => {
        const regExp = new RegExp(`${action.payload}`, 'gi');
        return contact.name.match(regExp) || contact.email.match(regExp)
      })
    }

    case CLEAR_FILTER: 
    return {
      ...state,
      filtered: null
    }

    case CONTACT_ERROR: 
    return {
      ...state,
      error: action.payload
    }

    case GET_CONTACTS: 
    return {
      ...state,
      contacts: action.payload,
      loading: false

    }

    case CLEAR_CONTACTS: 
    return {
      ...state,
      contacts: null,
      current: null,
      filtered: null,
      error: null
    }

    default: return state;
  }
}