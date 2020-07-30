import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

const More = () => {
    return (
        <View style={styles.more}>
            <TouchableOpacity>
                <View style={styles.moreBlock}>
                    <Text style={styles.moreText}>Иджыри</Text>
                    <Ionicons style={styles.moreIcon} name="ios-arrow-forward"/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default More

const styles = StyleSheet.create({
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
})
