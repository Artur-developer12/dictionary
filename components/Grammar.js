import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Grammar = () => {
    return (
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
})
