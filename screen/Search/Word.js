import React from 'react'
import { StyleSheet, View} from 'react-native'

import SelectLanguage from '../../components/SelectLanguage'
import Input from '../../components/Input'

import Translate from '../../components/Translate'
import Sentence from '../../components/Sentence'
import Grammar from '../../components/Grammar'
import Proverb from '../../components/Proverb'

const Word = () => {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <SelectLanguage black w100/>
                <Input noFocus/>
            </View>
            <Translate/>
            <Sentence/>
            <Grammar/>
            <Proverb/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    search:{
        alignItems: 'center',
        paddingVertical: 40,
        backgroundColor: '#fff',
    },
})


export default Word

