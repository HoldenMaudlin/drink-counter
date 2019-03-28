/*
* COUNT SCREEN
* 
* Features: Allows user to increase or decrease drink count
*           Timer to show user when drinks were consumed
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CountScreen extends React.Component {
    render() {
        return(
            <View>
                <Name></Name>
                <Count></Count>
                <Plus></Plus>
                <Minus></Minus>
            </View>
        )
    }
}

export default CountScreen