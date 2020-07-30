import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableNativeFeedback, TouchableOpacity } from 'react-native'


const   SearchBlock = ({navigation}) => {
    
        return (
            <View style={styles.inputBlock}>
                <TextInput 
                    style={styles.input}
                    placeholder="Введите текст"
                    placeholderTextColor={'#CFCFCF'}
                    autoFocus={true}
                />
            </View>
        )
    
}
const styles = StyleSheet.create({
   
    inputBlock:{
        width: '90%'
    },
    input:{
        backgroundColor:'#F7F7F7',
        borderRadius: 3,
        height: 50,
        paddingLeft: 20,
        fontFamily: 'Montserrat-Bold'
        
    },
})

export default SearchBlock