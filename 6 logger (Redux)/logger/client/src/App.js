import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import { Provider } from 'react-redux'

import './App.css';
import Searchbar from './components/dumb/Searchbar';
import Logs from './components/smart/logs/Logs';
import AddBtn from './components/dumb/AddBtn';
import AddLogModal from './components/smart/logs/AddLogModal';
import EditLogModal from './components/smart/logs/EditLogModal';
import AddTechModal from './components/smart/techs/AddTechModal';
import Techs from './components/smart/techs/Techs';
import store from './store';


function App() {

  useEffect(() => {
    // MJS init
    M.AutoInit();
  });

  return (
    <Provider store={store}>
    <Fragment>
      <Searchbar />
      <AddBtn />
      <Logs />
      <Techs />
      <AddLogModal />
      <EditLogModal />
      <AddTechModal />
    </Fragment>
    </Provider>

  );
}

export default App;
