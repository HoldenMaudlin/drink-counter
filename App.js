import React from 'react';
import MainSwitchNav from './src/nav/switch'
import { createAppContainer } from 'react-navigation'

// React-Navigation v3 change
const AppBundle = createAppContainer(MainSwitchNav)

// Top Level of Applciation
export default class App extends React.Component {
  render() {
    return (
      <AppBundle></AppBundle>
    );
  }
}