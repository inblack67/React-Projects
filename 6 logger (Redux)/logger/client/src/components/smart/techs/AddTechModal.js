import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {

  const [fullName, setFullName] = useState('');

  const onSubmit = () => {

    if(fullName === '')
    {
      M.toast({ html: 'Enter your full name' });
    }
    else
    {
      console.log(fullName);
      M.toast({ html: 'Tech Added' });
      setFullName('')
    }
  }

  return (
    
    <div id="add-tech-modal" className="modal">

      <div className="modal-content">
        <h4>Add Tech</h4>
        <br/>

        <div className="row">
          <div className="input-field">
            <input type="text" name="fullName" value={fullName} onChange={e => setFullName(e.target.value)}/>
            <label htmlFor="fullName">Full Name</label>
          </div>
        </div>


        <div className="modal-footer">
          <a href="#!" onClick={onSubmit} className="btn red modal-close">
            Enter
          </a>
        </div>

      </div>
    </div>
  )
}

export default AddTechModal;
