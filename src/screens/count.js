/*
* COUNT SCREEN
* 
* Features: Allows user to increase or decrease drink count
*           Timer to show user when drinks were consumed
*/

// Module Imports
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';
import { AdMobBanner } from 'expo'
import { SafeAreaView } from 'react-navigation';

// Component Imports
import CountButton from '../components/countButton';
import Count from '../components/count';
import Log from '../components/log'

// Style Imports
import Colors from '../style/colors'

// Props for count buttons
const plusName = 'plus'
const plusType = 'antdesign'
const plusSize = 45
const minusName = 'minus'
const minusType = 'antdesign'
const minusSize = 45
const stopName = 'stop'
const stopType = 'foundation'
const stopSize = 25

function compare(a, b) {
    return a.key > b.key 
}

class CountScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            log: []
        }
    }

    // Header
    static navigationOptions = {
        headerStyle: {
            backgroundColor: Colors.mainColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    // Stack functions
    _pop() {
        var log = this.state.log
        if (log.length > 0) {
            log.sort(compare)
            log.pop()
            this.setState({log: log})
        }
    }

    _push(logRow) {
        var log = this.state.log
        if (log.length < 99) {
            log.push(logRow)
            this.setState({log: log})
        }
    }

    // Count Functions
    _decrementCount() {
        if (this.state.count > 0) {
            this.setState({count: this.state.count - 1})
            this._pop()
        } else {
            this.setState({count: 0})
        }
    }

    _incrementCount() {
        if (this.state.count < 98) {
            const count = this.state.count
            this.setState({count: this.state.count + 1})
            var stamp = new Date()
            const time = stamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            const date = stamp.toLocaleDateString([], {month: 'long', day:'2-digit'})
            const timeLog = {
                key: count + 1,
                date: date,
                time: time,
            }
            this._push(timeLog)
        } else {
            this.setState({count: 99})
        }
    }

    _resetCountState() {
        this.setState({count: 0})
        this.setState({log: []})
    }

    _resetCount() {
        Alert.alert(
            'Warning!',
            'Do you want to reset your count?',
            [
              {text: 'Hell Nah!', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () => this._resetCountState()},
            ],
            { cancelable: false }
        )

    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={Colors.mainColor} barStyle='light-content'></StatusBar>
                <View style={styles.countContainer}>
                    <Count count={this.state.count}></Count>
                </View>
                <View style={styles.buttonContainer}>
                    <CountButton
                        flex={1}
                        style={styles.leftButton}
                        iconName={minusName} 
                        iconType={minusType} 
                        iconSize={minusSize} 
                        onPress={this._decrementCount.bind(this)}>
                    </CountButton>
                    <CountButton 
                        name='stop'
                        flex={.5}
                        iconName={stopName} 
                        iconType={stopType} 
                        iconSize={stopSize} 
                        onPress={this._resetCount.bind(this)}>
                    </CountButton>
                    <CountButton 
                        flex={1}
                        style={styles.rightButton}
                        iconName={plusName} 
                        iconType={plusType} 
                        iconSize={plusSize} 
                        onPress={this._incrementCount.bind(this)}>
                    </CountButton>
                </View>
                <View style={styles.logContainer}>
                    <Log data={this.state.log}></Log>
                </View>
                <AdMobBanner
                    adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                    testDeviceID="phone"
                    onDidFailToReceiveAdWithError={this.bannerError}
                />
            </SafeAreaView>
        )
    }
}

export default CountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainColor,
    },
    countContainer: {
        flex: 1,
        backgroundColor: Colors.mainColor
    },
    buttonContainer: {
        backgroundColor: Colors.mainColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
    },
    leftButton: {
        marginLeft: 20,
    },
    rightButton: {
        marginRight: 20,
    },
    logContainer: {
        flex: 1.3,
        backgroundColor: Colors.mainColor,
    }
})