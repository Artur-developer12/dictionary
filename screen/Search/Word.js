import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

import SelectLanguage from '../../components/SelectLanguage'
import Input from '../../components/Input'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Word = () => {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <SelectLanguage black w100/>
                <Input noFocus/>
            </View>
            
            {/* Перевод */}

            <View style={styles.translate}>
                <View style = {styles.wordBlock}>
                    <Text style={styles.Word}>Акъыл</Text>
                    <View style = {styles.Value}>
                        <Text style = {styles.ValueText}>ум, разум, сознание</Text>
                        <FontAwesome style = {styles.ValueSound} name="volume-up" />
                    </View>
                </View>
                <View style={styles.button}>
                    <MaterialIcons style={styles.buttonError} name="error"/>
                    <MaterialIcons style={styles.buttonBookmark} name="bookmark-border" />
                </View>
            </View>

            {/* Предложенэ */}

            <View style={styles.sentence}>
                <Text style={styles.sentenceTitle}>Предложенэ</Text>
                <View style={styles.sentenceBlock}>
                    <View style={styles.sentenceItem}>
                        <Text style={styles.sentenceNum}>1</Text>
                        <View style={styles.sentenceElem}>
                            <Text style={styles.sentenceWord}>Акъыл иIэн</Text>
                            <Text style={styles.sentenceTranslate}>Обладать умом</Text>
                        </View>
                    </View>
                    <View style={styles.more}>
                        <TouchableOpacity>
                            <View style={styles.moreBlock}>
                                <Text style={styles.moreText}>Иджыри</Text>
                                <Ionicons style={styles.moreIcon} name="ios-arrow-forward"/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* Граматика */}
            <View style={styles.grammar}>
                <View style={styles.grammarItem}>
                    <View style={styles.grammarHeader}>
                        <Text style={styles.grammarTitle}>Синонимхэр</Text>
                        <Text style={styles.grammarCol}>1</Text>
                    </View>
                    <View style={styles.grammarBlock}>
                        <View style={styles.grammarElem}>
                            <Text style={styles.grammarText}>Губзыгъэ</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.grammarItem}>
                    <View style={styles.grammarHeader}>
                        <Text style={styles.grammarTitle}>Антонимхэр</Text>
                        <Text style={styles.grammarCol}>2</Text>
                    </View>
                    <View style={styles.grammarBlock}>
                        <View style={styles.grammarElem}>
                            <Text style={styles.grammarText}>Акъылэншэ</Text>
                        </View>
                        <View style={styles.grammarElem}>
                            <Text style={styles.grammarText}>Делэ</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* Граматика */}
            <View style={styles.Proverb}>
                <Text style={styles.ProverbTitle}>Пэсловицэ</Text>
                <Text style={styles.ProverbText}>Акъыл зиIэм уеущиймэ, фIыщIэ къыпхуищIынщ, акъылыншэм ауан укъищIынщ</Text>
            </View>
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
        paddingHorizontal: 25,


    },
    // translate
    translate:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingBottom: 20

    },
    Word:{
        fontSize: 30,
        fontFamily: 'Roboto-Bold'
    },
    Value:{
        flexDirection: 'row'
    },
    ValueText:{
        fontSize: 16,
        color: '#0679FF',
        fontFamily: 'Montserrat-Regular'

    },
    ValueSound:{
        fontSize: 24,
        color: '#0679FF',
        marginLeft: 10,
    },
    button:{
        flexDirection: 'row'
    },
    buttonError:{
        color: '#0679FF',
        fontSize: 24,
        marginRight: 20,
    },
    buttonBookmark:{
        color: '#0679FF',
        fontSize: 24,
    },
    // sentence
    sentence:{
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    sentenceTitle: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 15,
        
    },
    sentenceBlock:{
    },
    sentenceItem:{
        flexDirection: 'row',
    },
    sentenceNum:{
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#C5C5C5',
        marginRight: 10,

    },
    sentenceWord:{
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    sentenceTranslate:{
        fontSize: 11,
        color: '#FF3C3C', 
        fontFamily: 'Montserrat-LightItalic'
    },
    more:{
        alignSelf: 'flex-end',
        margin: 5
    },
    moreBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.6,
    },
    moreText:{
        fontSize: 9,
        fontFamily: 'Montserrat-Regular',
        marginRight: 5,

    },
    moreIcon:{
        fontSize: 14,
        color: '#000',
    },
    // grammar
    grammar:{
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 20,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    grammarTitle:{
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        marginRight: 5

    },
    grammarCol:{
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        color: '#868686'

    },
    grammarHeader:{
        flexDirection: 'row',
        marginBottom: 10
    },
    grammarElem:{
        marginBottom: 8,
    },
    grammarText:{
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: '#0679FF',
    },
    // Proverb
    Proverb:{
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 20,
        marginBottom: 10,
    },
    ProverbTitle:{
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 10
    },
    ProverbText: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
    }
})


export default Word

