import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {

  const [message, setMessage] = useState('');
  const [tech, setTech] = useState('');
  const [attention, setAttention] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    if(message === '' || tech === '')
    {
      M.toast({ html: 'Add Message And Tech' })
    }

    else
    {
      console.log(message, attention, tech);

      M.toast({ html: 'Log Edited' })
      
      setMessage('')
      setTech('')
      setAttention(false)
    }
  }

  return (
    <div id="edit-log-modal" className="modal">
    <div className="modal-content">
      <h4>Edit Log</h4>

      <div className="row">
        <div className="input-field">
          <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="input-field">
          <select name="tech" value={tech} onChange={e => setTech(e.target.value)}>
            <option disabled>Select Technicians</option>
            <option>John Doe</option>
            <option>Sara Smith</option>
            <option>Wick Black</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="input-field">
          <p>
            <label>
              <input type="checkbox" name="attention" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)}/>
              <span>Needs Attention</span>
            </label>
          </p>
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

export default EditLogModal
