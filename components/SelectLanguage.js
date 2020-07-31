import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import {connect} from 'react-redux'
import {changeLanguage} from '../redux/action'


const SelectLanguage = ({black, language, changeLanguage, searchData}) => {
 
    const [animateRun, setAnimateRun] = useState(false)

    console.log('langageData',searchData)
     
    const colorText= {
        color: black=== true ? '#000': '#fff',
        fontFamily: 'Montserrat-ExtraBold'
    }
    
    const onChange = () => {
        changeLanguage('Circassian')
        console.log(language)

    }

  

    return (
        <View style={styles.language}>
            <Text style={styles.languageElem, colorText}>Адыгэбзэ</Text>
            <View >
            <TouchableNativeFeedback  onPress={onChange} background={TouchableNativeFeedback.Ripple('#DFDFDF', true)}>
                <View style={styles.languageChange} >
                    <View>
                        <FontAwesome5   style={styles.languageChangeIcon, colorText} size={18} name="exchange-alt"/>
                    </View>
                </View>
            </TouchableNativeFeedback>
            </View>
            <Text style={styles.languageElem, colorText}>Русский</Text>
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

const mapStateToProps = state => (
    { 
        language: state.language, 
        searchData: state.searchData
    }
)
const mapDispachToProps = {
    changeLanguage
}


export default connect(mapStateToProps, mapDispachToProps)(SelectLanguage)