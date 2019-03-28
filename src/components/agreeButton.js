/*
* Terms Component
* 
* 
*/

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class AgreeButton extends React.Component {
    render() {
        return(
            <View>
                <TouchableOpacity>
                    <Text>
                        Agree
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AgreeButton