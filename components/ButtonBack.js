import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useDispatch} from 'react-redux'
import {clearState} from '../redux/action'



const ButtonBack = ({navigation, clear}) => {
    const dispatch = useDispatch();


    const back = () => {
        navigation.goBack()
        clear && dispatch(clearState())
    }
    return (
        <View style={styles.back} >
            <TouchableOpacity onPress={()=>back()}>
                <View style={styles.backIcon}>
                    <FontAwesome5 name="arrow-left" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonBack

const styles = StyleSheet.create({
    back:{
        position: 'absolute',
        top: 40,
        left: 15,
        zIndex: 100
    },
    backIcon:{
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})
