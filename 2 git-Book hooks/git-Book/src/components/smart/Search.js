import React, { useState } from 'react'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';


const Search = ({ showClear, clearUsers, searchUsers }) => {

  const [text, setText] = useState('');

    const onChange = e => {
      setText(e.target.value);
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
        searchUsers(text);
        setText('');
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

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
}


export default Search