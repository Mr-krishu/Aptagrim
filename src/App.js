import React from 'react';
import './App.css';
import User from './components/User/User'
import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Page/Home'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
 <Router>
    <Topbar/>  
    <Sidebar/>
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/user">
      <User/>
      </Route>
    </Switch>

    </Router>
    </div>
  );
}

export default App;
