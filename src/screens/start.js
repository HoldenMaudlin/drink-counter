/*
* COUNT SCREEN
* 
* Function: Allows user to increase or decrease drink count
* 
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { AdMobBanner } from 'expo'
import Colors from '../style/colors';

class StartScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    } 

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView>
                    <View style={styles.container}>
                        <Text style={styles.bigText}>Sup Davis & Co.</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Count')}>
                            <View style={styles.button}>
                                <Text style={styles.text}>Start</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <AdMobBanner
                        adUnitID="ca-app-pub-6030163668836471/1546730550" // Test ID, Replace with your-admob-unit-id
                        testDeviceID="phone"
                        onDidFailToReceiveAdWithError={this.bannerError}
                    />
                </SafeAreaView>
            </View>
        )
    }
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 60,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: Colors.mainColor
    },
    bigText: {
        fontSize: 32,
        color: Colors.mainColor,
        marginBottom: 30,
    },
    text: {
        fontSize: 22,
        color: Colors.mainText
    }
})