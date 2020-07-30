import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableNativeFeedback, StatusBar } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const  Setting = ({navigation}) =>{
        return (
            <View style={styles.conteiner}>
                <TouchableNativeFeedback onPress={() => navigation.navigate('Language')}>
                       <View style={styles.setting} >
                           <FontAwesome style={styles.settingIcon} name="language"/>
                           <Text style={styles.settingText}>Язык</Text>
                       </View>
                </TouchableNativeFeedback>
            </View>
           )  
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: '#fff',
        flex: 1,
        
    },
    
    setting:{
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        paddingLeft: 20,

    },
    settingIcon:{
        fontSize: 24,
        color: '#000',
        opacity: 0.3,
        marginRight: 20,
    },
    settingText:{
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    }
})


export default Setting 