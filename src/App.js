
import React from "react";
import { Switch, Route , Link } from 'react-router-dom';
import { Layouts, Typography, Space  } from 'antd'
import './App.css'
//below import gets all the components in one line to it effecient ang good looking
import {Navbar} from './components' 


function App() {
  //const apikey = process.env.APIKEY // Assignig a variable to my apikey so that I can call the variable whereever needed by keeping my key protected
  return (
    <div className="App">
      <div className="navbar">
         <Navbar/>
      </div>
      <div className="main">

      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;


