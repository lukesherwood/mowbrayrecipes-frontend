import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux'

import {autoLogin, logUserOut} from './actions/userActions'
import SignUp from './SignUp';
import SignIn from './SignIn'

import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import Container from 'react-bootstrap/Container'

class App extends Component {
  render () {
    return (
    <div className="App">
          <Container fluid>
            <Switch>
              <Route exact path='/signIn' component={SignIn}/>
              <Route exact path='/signUp' component={SignUp}/>
            </Switch>
            <NotificationContainer />
          </Container>
    </div>
  );
}
}

export default App;
