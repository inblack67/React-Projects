import React, { useState, useContext } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import GithubContext from '../../context/github/githubContext'


const Search = ({ showClear }) => {

  const githubContext = useContext(GithubContext);
  
  const { searchUsers, clearUsers, users } = githubContext;

  const [text, setText] = useState('');

    const onChange = e => {
      setText(e.target.value);
    }

    const onSubmit = e => {

      e.preventDefault();

      if(text === '')
      {
        M.toast({
          html: 'Start Typing...'
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
          <input type="submit" value="Search" className="btn green"/>

          { users.length > 0 && 
          <input type="submit" value="Clear" className="btn red secondary-content" onClick={clearUsers}/>
       }

        </div>


      </form>
    )
}


export default Search