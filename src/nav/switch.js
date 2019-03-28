import React from 'react'
import { createSwitchNavigator } from 'react-navigation'

// Screens & Nav
import AuthScreen from '../screens/auth'
import MainStackNav from '../nav/main'

const MainSwitchNav = createSwitchNavigator({
    Auth: AuthScreen,
    Start: MainStackNav,
})

export default MainSwitchNav