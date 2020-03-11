import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT } from '../types';

export default (state, action) => {
  switch(action.type)
  {
    case ADD_CONTACT: 
    return {
      ...state,
      // copy of state needs to be created since it is immutable
      contacts: [...state.contacts, action.payload]
    }

    case DELETE_CONTACT: 
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload)
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

    case UPDATE_CONTACT: 
    return {
      ...state,
      contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)
    }

    default: return state;
  }
}