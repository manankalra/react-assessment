import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Navigation from './Navigation';

import { firebase } from './../firebase';
import * as routes from './../lib/routes';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <Navigation authUser={ this.state.authUser }/>
          <hr />
          <Route
            exact path={routes.SIGN_UP}
            component={SignUp}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={SignIn}
          />
          <Route
            exact path={routes.HOME}
            component={App}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
