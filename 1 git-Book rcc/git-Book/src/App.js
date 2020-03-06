import React, { useEffect, Fragment } from 'react';
import Navbar from './components/dumb/Navbar';
import Users from './components/smart/Users';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';


function App() {

  useEffect(() => {
    // MJS init
    M.AutoInit();
  });


  return (
    <Fragment>
      <Navbar />
      <Users />
    </Fragment>
  );
}

export default App;
