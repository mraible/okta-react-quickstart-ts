import './App.css';
import * as React from "react";
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';
import { Component } from 'react';
import { Router, Route } from 'react-router';

const logo = require('./logo.svg');

const config = {
  issuer: 'https://dev-158606.oktapreview.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oac85oh5p2VqZJ7c0h7'
};

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer={config.issuer}
                  client_id={config.clientId}
                  redirect_uri={config.redirectUri} >
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}

export default App;
