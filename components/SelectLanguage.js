import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 


const SelectLanguage = ({black}) => {
    const [darkColor, setDarkColor] = useState(false)

    const colorText= {
        color: black=== true ? '#000': '#fff',
        fontFamily: 'Montserrat-ExtraBold'
    }
     

  

    return (
        <View style={styles.language}>
            <Text style={styles.languageElem, colorText}>Адыгэбзэ</Text>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#DFDFDF', true)}>
                <View style={styles.languageChange}>
                    <View>
                        <FontAwesome5 style={styles.languageChangeIcon, colorText} size={18} name="exchange-alt"/>
                    </View>
                </View>
            </TouchableNativeFeedback>
            <Text style={styles.languageElem, colorText}>Русский</Text>
        </View>
    )
}
export default SelectLanguage

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
