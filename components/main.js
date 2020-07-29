import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Main extends Component {
    render() {
        return (
            <View>
                <Text style={styles.textMain}> Montserrat </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textMain:{
        fontFamily:'Montserrat-Black',
        fontSize: 40,
    }
})