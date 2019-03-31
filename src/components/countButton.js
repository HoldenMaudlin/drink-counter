/*
* Count Button
* 
* 
*/

import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import Colors from '../style/colors';

class CountButton extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            pressed: false
        }
    }

    _onPress() {
        this.setState({pressed: !this.state.pressed})
    }

    render() {
        const buttonStyle = {
            height: 92 * this.props.flex,
            width: 92 * this.props.flex,
            borderRadius: 46 * this.props.flex,
        }
        return(
           <View style={{flex: this.props.flex, backgroundColor: this.props.cl, alignItems: 'center', justifyContent: 'center', height: 100}}>
                <TouchableOpacity
                    onPress = {this.props.onPress}
                    onPressIn = {this._onPress.bind(this)}
                    onPressOut = {this._onPress.bind(this)}
                >
                    <View style={[styles.buttonBox, buttonStyle]}>
                        <Icon 
                            size={this.props.iconSize} 
                            name={this.props.iconName} 
                            type={this.props.iconType} 
                            color={Colors.mainAccent}>
                        </Icon>
                    </View>
                </TouchableOpacity>
           </View>
        )
    }
}

export default CountButton

const styles = StyleSheet.create({
    buttonBox: {
        height: 90,
        width: 90,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center'
    }
})