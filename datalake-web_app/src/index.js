import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import './index.css';
import './App.css'
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Team from './Team';
import AboutUs from './AboutUs';
import Error404 from './Error404';

const routs = (
  < BrowserRouter >
    <div>
      <header className="App-header" id="header">
        <a id="headerLogo" href="/">Datalake</a>
        <div id="headerRightSidePane">
          <a className="NavbarItem" href="/info">What is Datalake?</a>
          <a className="NavbarItem" href="/Team">Team</a>
          <a className="NavbarItem" href="/AboutUs">About Us</a>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/aboutus" component={AboutUs} />
        <Route component={Error404} />
      </Switch>
    </div>
  </ BrowserRouter >
);
ReactDOM.render(routs, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
