import React, { Component } from 'react'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';


export default class Search extends Component {

  state = {
    text: ''
  }

  render() {

    const { text } = this.state
    const { clearUsers, showClear } = this.props

    const onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }

    const onSubmit = e => {

      e.preventDefault();

      if(text === '')
      {
        M.toast({
          html: 'Type Something ...'
        });
      }
      
      if(text !== '')
      {
        this.props.searchUsers(text);
      }

      else
      {

      }

    }

    return (

      <form onSubmit={onSubmit}>
        <div className="input-field">
          <input type="text" name="text" value={text} onChange={onChange}/>
          <label htmlFor="Search">Search</label>
        </div>
        <div className="input-field">
          <input type="submit" value="Search" className="btn red"/>
        </div>

        { showClear && <div className="input-field secondary-content">
          <input type="submit" value="Clear" className="btn black" onClick={clearUsers}/>
        </div> }

      </form>
    )
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
}