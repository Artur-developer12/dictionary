import React, { useEffect, useState , Fragment} from 'react'
import { StyleSheet, View, ActivityIndicator} from 'react-native'
import { useDispatch, useSelector} from 'react-redux'
import {getFondedWord} from '../../redux/action'

import SelectLanguage from '../../components/SelectLanguage'
import Input from '../../components/Input'

import Translate from '../../components/Translate'
import Sentence from '../../components/Sentence'
import Grammar from '../../components/Grammar'
import Proverb from '../../components/Proverb'
import ButtonBack from '../../components/ButtonBack'
import { ScrollView } from 'react-native-gesture-handler'

const Word = ({navigation, route}) => {

    const {wordId} = route.params
    console.log(wordId)

    const dispatch = useDispatch();
    const wordData = useSelector(state => state.foundedWord)
    
    useEffect(()=>{
        dispatch(getFondedWord(wordId))
    },[])


    console.log('wordData',wordData)
    

    return (
        <View style={styles.container}>
            {
                wordData.length === 0 ? 
                <View style={styles.preloaderContainer}>
                    <ActivityIndicator style={styles.preloader} hidesWhenStopped={true} size="large" color="#6222c9" />
                </View>
                :
                <ScrollView>
                    <ButtonBack clear navigation={navigation}/>
                    <View style={styles.search}>
                        {/* <SelectLanguage black w100/>
                        <Input noFocus/> */}
                    </View>
                    <Translate translate={wordData}/>
                    {wordData.sentence && <Sentence sentence={wordData.sentence}/>}
                    <Grammar/>
                    <Proverb/>
                </ScrollView>
            }
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
    preloaderContainer:{
        position: 'absolute', 
        top: 0, 
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    preloader:{
    }
})


export default Word

