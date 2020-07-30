import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import More from '../components/More'


const Sentence = () => {
    return (
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
            </View>
            <More/>
        </View>
    )
}

export default Sentence

const styles = StyleSheet.create({
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
})
