import React, { useState } from 'react'
import {StyleSheet, View, TextInput} from 'react-native'


const SearchBlock = ({noFocus, w100}) => {
    const width = {
        width: w100 === true ? '100%': '90%'
    }
        return (
            <View style={styles.inputBlock, width}>
                <TextInput 
                    style={styles.input}
                    placeholder="Введите текст"
                    placeholderTextColor={'#CFCFCF'}
                    autoFocus={!noFocus}
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