import React, { useEffect, useState } from 'react'
import {StyleSheet, View, TextInput} from 'react-native'
import {connect, useDispatch, useSelector} from 'react-redux'
import {fetchRussianWords,fetchCircassianWords, RUSSIAN, CIRCASSIAN} from '../redux/action'






const SearchBlock = ({noFocus, w100}) => {

    const searchData = useSelector(state => state.searchData);
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();


    console.log(language)

    // ввод в input
    const onSearch = async (value) => {
        console.log(value)
        if(language === RUSSIAN){
            dispatch(fetchRussianWords(value)) 

        }else if(language === CIRCASSIAN){
            dispatch(fetchCircassianWords(value))
        }
        
        console.log('input',searchData)
    }
    
    const width = {width: w100 === true ? '100%': '90%'}
  

        return (
            <View style={styles.inputBlock, width}>
                <TextInput 
                    style={styles.input}
                    placeholder="Введите текст"
                    placeholderTextColor={'#CFCFCF'}
                    autoFocus={!noFocus}
                    onChangeText={onSearch}
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