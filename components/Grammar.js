import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Grammar = ({grammar}) => {
    return (
        <View style={styles.grammar}>
            <View style={styles.grammarItem}>
                <View style={styles.grammarHeader}>
                    <Text style={styles.grammarTitle}>Синонимы</Text>
                    <Text style={styles.grammarCol}></Text>
                </View>
                <View  style={styles.grammarBlock}>
                {
                    grammar.synonym  && grammar.synonym.map((item,index)=>{
                        return(
                            <View key={index} style={styles.grammarElem}>
                                <Text style={styles.grammarText}>
                                    {item.word}
                                </Text>
                            </View>
                        )
                    })
                }
                </View>
            </View>

            <View style={styles.grammarItem}>
                <View style={styles.grammarHeader}>
                    <Text style={styles.grammarTitle}>Антонимы</Text>
                    <Text style={styles.grammarCol}></Text>
                </View>
                <View style={styles.grammarBlock}>
                    {
                        grammar.antonym  && grammar.antonym.map((item,index)=>{
                            <View key={index} style={styles.grammarElem}>
                                <Text style={styles.grammarText}>{item.word}</Text>
                            </View>
                        })
                    }
                    
                </View>
            </View>
        </View>
    )
}

export default Grammar

const styles = StyleSheet.create({
    grammar:{
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 20,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    grammarTitle:{
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
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
})
