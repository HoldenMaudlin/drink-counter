// Modules
import React from 'react'
import { createStackNavigator } from 'react-navigation'

// Screens
import StartScreen from '../screens/start'
import CountScreen from '../screens/count'

const MainStackNav = createStackNavigator({
    Start: StartScreen,
    Count: CountScreen
})

export default MainStackNav