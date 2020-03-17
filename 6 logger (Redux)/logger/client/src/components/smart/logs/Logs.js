import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LogItem from './LogItem'
import Preloader from '../../dumb/Preloader'

const Logs = () => {

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    getLogs();
    // eslint-disable-next-line
  }, [])

  const getLogs = async () => {
    try {

      setLoading(true);

      const res = await axios('/logs');

      setLogs(res.data.data);

      setLoading(false);

    } catch (err) {
      console.error(err)
    }
  }

  if(loading)
  {
    return (
      <div className="container center" style={{ "marginTop": "200px" }}>
        <Preloader />
      </div>
    )
  }

  return (
    <div className="container">
      <h3 className="center">Logs</h3>
      <br/>
      <ul className="collection">
        { !loading && logs.length === 0 ? <p className="flow-text">No Logs Listed</p> : logs.map(log => (
          <LogItem log={log} key={log._id} />
        ))  }
      </ul>
    </div>
  )
}

export default Logs
