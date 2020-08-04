import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import More from '../components/More'


const Sentence = ({sentence}) => {
    let count = 1
    return (
        <View style={styles.sentence}>
            <Text style={styles.sentenceTitle}>Простые предложения</Text>
            <View style={styles.sentenceBlock}>
            {sentence.map((item, index)=>{
                return (
                    <View key={index} style={styles.sentenceItem}>
                        <Text style={styles.sentenceNum}>{count++}</Text>
                        <View style={styles.sentenceElem}>
                            <Text style={styles.sentenceWord}>{item.text_circassian}</Text>
                            <Text style={styles.sentenceTranslate}>{item.text_rusisan}</Text>
                        </View>
                    </View>
                )
            })
            }
            </View>
            {/* <More/> */}
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
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
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
