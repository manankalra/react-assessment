import React from 'react';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';

import App from './../App';
import SignOutButton from './SignOut';

import configureStore from './../state/store';
import * as routes from '../lib/routes';

const store = configureStore();

const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <div>
    <Provider store={ store }><App /></Provider>
    <SignOutButton />
  </div>

const NavigationNonAuth = () =>
    <Link to={routes.SIGN_IN}>Sign In</Link>

export default Navigation;
