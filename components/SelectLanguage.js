import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, Animated, Easing } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import {connect, useSelector, useDispatch, useStore} from 'react-redux'
import {changeSearchToeRussian, changeSearchToCircassian} from '../redux/action'


const SelectLanguage = ({black}) => {
 
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();
    const [changeLanguage, setChangeLanguage] = useState(false)
     
    const colorText= {color: black=== true ? '#000': '#fff',}





    
    // Animation
    const rotateAnim = useRef(new Animated.Value(0)).current 
    const translateLeftAnim = useRef(new Animated.Value(0)).current 
    const translateRightAnim = useRef(new Animated.Value(0)).current 
    const [toggle, setToggle] = useState(false);


    const onAnimate = () => {
        Animated.parallel([
            Animated.timing(rotateAnim, {
              toValue: toggle ? 0: 180,
              duration: 300,
              useNativeDriver: true, 
              easing: Easing.linear,
            }),
            Animated.timing(translateLeftAnim, {
                toValue: toggle ? 0: 180,
                duration: 300,
                useNativeDriver: true, 
                easing: Easing.linear,
            }),
            Animated.timing(translateRightAnim, {
                toValue: toggle ? 0: -180,
                duration: 300,
                useNativeDriver: true, 
                easing: Easing.linear,
            }),

        ]).start(({finished})=> finished && setChangeLanguage(!changeLanguage))
             

        
      };

      const spin = rotateAnim.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg']
        });


      
    const onChange = () => {
        onAnimate()
        setToggle(!toggle)
    }





    useEffect(()=>{
        changeLanguage === false ? dispatch(changeSearchToeRussian()): dispatch(changeSearchToCircassian())
        console.log(language)

    },[changeLanguage])

 
  

    return (
        <View style={styles.language}>
            <Animated.View style={[styles.languageElemBlock,{transform:[{translateX: translateLeftAnim}]}]}>
                <Text style={[styles.languageElem, colorText]}>Русский</Text>
            </Animated.View>
            <View >
            <TouchableNativeFeedback  onPress={onChange} background={TouchableNativeFeedback.Ripple('#DFDFDF', true)}>
                <View style={styles.languageChange} >
                    <Animated.View style={{ transform: [{ rotate: spin }]}}>
                            <FontAwesome5   style={styles.languageChangeIcon, colorText} size={18} name="exchange-alt"/>
                    </Animated.View>
                </View>
            </TouchableNativeFeedback>
            </View>
            <Animated.View style={[styles.languageElemBlock, {transform:[{translateX: translateRightAnim}]}]}>
                <Text style={[styles.languageElem, colorText]}>Черкесский</Text>
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    language:{
        flexDirection: 'row',
        marginBottom: 20,
        width: 250,
        justifyContent: 'center' ,
        alignItems: 'center'
    },
    languageElemBlock:{
        width: 150,
        alignItems: 'center'
    },
    languageElem:{
        color: '#fff',
        fontFamily: 'Montserrat-ExtraBold'
    },
    languageChange:{
        width: 35,
        height: 35,
        borderRadius: 35/2,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    languageChangeIcon:{
        color: '#fff'
    },
})

 
 


export default SelectLanguage