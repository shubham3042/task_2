import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/LineIcons.css';
import './assets/css/magnific-popup.css';
import './assets/css/default.css';
import './assets/css/style.css';
import Header from './Component/Header';
import Service from './Component/Service';
import Priceing from './Component/Pricing';
import Action from './Component/Action';
import Table from './Component/Table';
function App() {
  return (
    <React.StrictMode>
    <React.Fragment>
      <Router>
        <Route exact path={"/"} component={Header} />
        <Route exact path={"/service"}  component={Service} />
        <Route exact path={"/Priceing"} component={Priceing}/>
        <Route exact path={"/Action"} component={Action}/>
        <Route exact path={"/Table"} component={Table}/>
      </Router>
    </React.Fragment>
    </React.StrictMode>
  );
}

export default App;
