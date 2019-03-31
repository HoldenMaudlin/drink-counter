import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../style/colors';

class Count extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.count}</Text>
      </View>
    );
  }
}

export default Count

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
    alignItems: "center",
    justifyContent: "center",
  },
  measure: {
    opacity: 0,
  },
  hidden: {
    overflow: "hidden",
  },
  text: {
    fontSize: 160,
    textAlign: 'right',
    color: Colors.mainText
  },
});