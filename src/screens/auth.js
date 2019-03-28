/*
* AUTH SCREEN
* 
* Function: Users Agree to Terms or don't use app
* 
*/

// Node Modules
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

// My Components
import Welcome from '../components/welcome'
import Terms from '../components/terms'
import AgreeButton from '../components/agreeButton'

class AuthScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView>               
                    <Welcome></Welcome>
                    <Terms></Terms>
                    <AgreeButton></AgreeButton>
                </SafeAreaView>
            </View>
        )
    }
}

export default AuthScreen

const styles = StyleSheet.create({
    // Main Container
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
    }
})