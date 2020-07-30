import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, TextInput, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 

import Input from '../../components/Input'
import SelectLanguage from '../../components/SelectLanguage'

const SearchActive = ({navigation}) => {
    return (
        <View style={styles.conteiner}>
            
            <StatusBar barStyle="light-content" backgroundColor={'#fff'}/>
            <View style={styles.search}>
                <SelectLanguage black/>
                <Input />
            </View >
            <View style={styles.back} >
                <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                    <View style={styles.backIcon}>
                        <FontAwesome5 name="arrow-left" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

export default SearchActive

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor: '#fff'
    },
    back:{
        position: 'absolute',
        top: 40,
        left: 15,
        zIndex: 100
    },
    backIcon:{
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    search:{
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 40
    },
    
})
