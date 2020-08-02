import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, Animated, Easing } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import {connect, useSelector, useDispatch, useStore} from 'react-redux'
import {changeSearchToeRussian, changeSearchToCircassian} from '../redux/action'


const SelectLanguage = ({black}) => {
 
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();
    const [changeLanguage, setChangeLanguage] = useState(false)
     
    const colorText= {color: black=== true ? '#000': '#fff',}
    const onChange = () => setChangeLanguage(!changeLanguage)

    const fadeAnim = useRef(new Animated.Value(0)).current 


    useEffect(()=>{
        changeLanguage === false ? dispatch(changeSearchToeRussian()): dispatch(changeSearchToCircassian())
        console.log(language)

    },[changeLanguage])
  

    return (
        <View style={styles.language}>
            <Text style={[styles.languageElem, colorText]}>Адыгэбзэ</Text>
            <View >
            <TouchableNativeFeedback  onPress={onChange} background={TouchableNativeFeedback.Ripple('#DFDFDF', true)}>
                <View style={styles.languageChange} >
                    <View>
                        <FontAwesome5   style={styles.languageChangeIcon, colorText} size={18} name="exchange-alt"/>
                    </View>
                </View>
            </TouchableNativeFeedback>
            </View>
            <Text style={[styles.languageElem, colorText]}>Русский</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    language:{
        flexDirection: 'row',
        marginBottom: 20,
        width: 250,
        justifyContent: 'space-between' ,
        alignItems: 'center'
    },
    languageElem:{
        color: '#fff',
        fontFamily: 'Montserrat-ExtraBold'
    },
    languageChange:{
        width: 30,
        height: 30,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    languageChangeIcon:{
        color: '#fff'
    },
})

 
 


export default SelectLanguage