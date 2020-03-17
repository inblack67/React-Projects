import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Preloader from '../../dumb/Preloader'
import TechListItem from './TechListItem'

const Techs = () => {

  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    getTechs();
    // eslint-disable-next-line
  }, [])

  const getTechs = async () => {

    try {

      setLoading(true);
      const res = await Axios('/techs');
      setTechs(res.data.data);
      setLoading(false);

    } catch (err) {
      console.error(err);
    }

  }

  return (
    <div id="tech-list-modal" className="modal">
    <div className="modal-content">
      <h4>Techs</h4>
      <br/>

      { !loading 
      && techs 
      && <ul className="collection">
        { techs.map(tech => (
          <TechListItem tech={tech} key={tech._id} />
        )) }

      </ul> }
    </div>
  </div>
  )
}

export default Techs
