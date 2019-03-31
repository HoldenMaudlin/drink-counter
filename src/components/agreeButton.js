/*
* Terms Component
* 
* 
*/

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class AgreeButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Start')}>
                    <Text>
                        Agree
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AgreeButton