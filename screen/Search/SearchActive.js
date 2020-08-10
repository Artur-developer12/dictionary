import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, TextInput, ActivityIndicator, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import {useSelector} from 'react-redux'

import Input from '../../components/Input'
import SelectLanguage from '../../components/SelectLanguage'
import ButtonBack from '../../components/ButtonBack'

const SearchActive = ({navigation}) => {
    const loading = useSelector(state => state.loading);
    const searchData = useSelector(state => state.searchData);
    
    return (
        <View style={styles.conteiner}>
            
            <StatusBar barStyle="light-content" backgroundColor={'#fff'}/>
            <View style={styles.search}>
                <SelectLanguage black/>
                <Input />
            </View >
            
            <ButtonBack navigation={navigation}/>
            {searchData.map((item,index)=>{
                return(
                    <View key={index} style={styles.fetch} >
                        <TouchableNativeFeedback onPress={()=>navigation.navigate('Word', {wordId: item.id})}>
                            <View>
                                <Text style={styles.fetchText}>{item.word}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                )
            })}
              <ActivityIndicator animating={loading} hidesWhenStopped={true} size="large" color="#6222c9" />
            
        </View>
        
    )
}

export default SearchActive

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor: '#fff'
    },
   
    search:{
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 40
    },
    fetch:{
        justifyContent: 'center'
    },
    fetchText:{
        fontSize: 15,
        paddingVertical: 20,
        paddingHorizontal: 30,
        fontFamily: 'Montserrat-Medium',
    }
    
})
