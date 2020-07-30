import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Proverb = () => {
    return (
        <View style={styles.Proverb}>
            <Text style={styles.ProverbTitle}>Пэсловицэ</Text>
            <Text style={styles.ProverbText}>Акъыл зиIэм уеущиймэ, фIыщIэ къыпхуищIынщ, акъылыншэм ауан укъищIынщ</Text>
        </View>
    )
}

export default Proverb

const styles = StyleSheet.create({

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
