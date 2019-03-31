/*
*
* Log of Drinks
*
* Features Needed - Add Drink, Remove Drink, TimeStamp, Clear Log
*
*/

import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../style/colors';

function compare(a, b) {
    return a.key < b.key 
}

const {height, width} = Dimensions.get('window')

class Log extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.data
        }
    }

    componentWillReceiveProps(props) {
        this.setState({data: props.data})
    }



    render() {
        listData = this.state.data
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                    <Text style={[styles.item, {fontSize: 26}]}>Drink Log</Text>
                </View>
                <FlatList
                data={listData.sort(compare)}
                extraData={this.state}
                renderItem={({item, index}) => {
                    return (
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} key={index}>
                        <Text style={[styles.item, {textAlign: 'left'}]}>{item.key}</Text>
                        <Text style={[styles.item, {textAlign: 'left'}]}>{item.date}</Text>
                        <Text style={[styles.item, {textAlign: 'right'}]}>{item.time}</Text>
                    </View>
                )}}
                />
            </View>
        )
    }
}

    export default Log

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        marginLeft: 12,
        marginRight: 12,
        padding: 10,
        fontSize: 18,
        height: 44,
        color: Colors.mainText
    },
})