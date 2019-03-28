/*
* AUTH SCREEN
* 
* Function: Users Agree to Terms or don't use app
* 
*/

import React from 'react';
import { View } from 'react-native';

class StartScreen extends React.Component {
    render() {
        return(
            <View>
                <Welcome></Welcome>
                <Terms></Terms>
                <AgreeButton></AgreeButton>
            </View>
        )
    }
}

export default StartScreen