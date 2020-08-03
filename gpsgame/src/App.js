import React, { useState, useEffect } from 'react';
import { render } from "react-dom";
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './Login.js';
import Apps from './Signup.js';
import SignUp from './Signup.js';


class App extends React.Component {
  constructor(props) {
    super(props);
   this.state = { time: 0 };
  }

  componentDidMount() {

    axios.get('/time').then((res) => {
    console.log(res.data);
    this.setState(res.data);
    });
  }

  render() {
    return (
      <div className="">
      {/*
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {this.state.time}.</p>
      </header>
      */}
      <Router>
          <div>
            <Route path='/login' component={SignIn}/>
            <Route path='/signup' component={Apps, SignUp}/>
          </div>
        </Router>
    </div>
  );
    }
}

export default App;