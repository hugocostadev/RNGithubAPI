import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from "react-navigation";

import Repos from './pages/Repos';
import Login from './pages/Login';

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Repos: Repos
    
  },
  {
    initialRouteName: "Repos",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);