import React, {useRef, useState} from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableHighlight, 
    Button, 
    TouchableNativeFeedback, 
    TextInput, 
    Animated, 
    Modal, 
    Easing,
    TouchableOpacity
} from 'react-native'
import {AntDesign} from '@expo/vector-icons';

import RadioButton from './RadioButton'

const SelfModal = ( {visible, openModal}) => {



    const PROP = [
        {
            key: 'Неправильный перевод',
            text: 'Неправильный перевод',
        },
        {
            key: 'Плохие примеры предложений',
            text: 'Плохие примеры предложений',
        },
        {
            key: 'Свой вариант',
            text: 'Свой вариант',
        }
        
    ];
// animate
const openModalAnim = useRef(new Animated.Value(400)).current 
const modalOpacitiAnim = useRef(new Animated.Value(0)).current 


const onModalShow = () => {
    Animated.parallel([
        Animated.timing(openModalAnim, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true, 
            easing: Easing.out(Easing.exp)
        }),
        Animated.timing(modalOpacitiAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true, 
            easing: Easing.out(Easing.exp)
        })
        

    ]).start()
}
 


const onModalClose = () => {
    console.log('close')
    Animated.parallel([
        Animated.timing(openModalAnim, {
            toValue: 400,
            duration: 400,
            useNativeDriver: true, 
            easing: Easing.out(Easing.exp)
        }),
        Animated.timing(modalOpacitiAnim, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true, 
            easing: Easing.out(Easing.exp)
        })

    ]).start(()=>openModal())

}


 
    
    
    return (
      
        <Modal 
            visible={visible}
            transparent={true}
            onShow={onModalShow}
        >  
            <Animated.View style={[styles.moadalContainer, {opacity: modalOpacitiAnim}]}>
                <Animated.View style={[styles.modalInner, {transform:[{translateY: openModalAnim}]}]}>
                <TouchableHighlight 
                    onPress={()=>onModalClose()}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    style={styles.modalClosePress}
                >
                    <AntDesign style={styles.modalClose} name="closecircle" />
                </TouchableHighlight>
                <Text style={styles.modalTitle}>Отчет о проблемах</Text>
                <View style={styles.problem}>
                    <RadioButton PROP={PROP}/>
                </View>
                <Text style={styles.comment}>Коментарий или предложения</Text>
                <View>
                    <TextInput 
                        style={styles.input}
                        placeholder="по желанию"
                        placeholderTextColor={'#CFCFCF'}
                    />
                    <TouchableNativeFeedback>
                            <Button style={styles.button} onPress={() =>console.log('send')} title="Отправить"/>
                    </TouchableNativeFeedback>
                </View>
            </Animated.View>

        </Animated.View>
    </Modal>
    )
}

export default SelfModal

const styles = StyleSheet.create({
    moadalContainer:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'flex-end',
    },
    modalInner:{
        backgroundColor: '#fff',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        padding: 15,
    },
    modalTitle:{
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 15
    },
    modalClose:{
        fontSize: 25,
        opacity: 0.5,
        justifyContent:'center',
        alignItems: 'center',
        
    },
    modalClosePress:{
        borderRadius: 50,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        width: 50,
        height:50,
    },
    comment:{
        paddingVertical: 20,
        fontFamily: 'Montserrat-SemiBold',
        opacity: 0.2,
    },
    input:{
        backgroundColor:'#F7F7F7',
        alignItems: 'flex-start',
        borderRadius: 5,
        height: 150,
        padding: 10,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 30,
        textAlignVertical: 'top'

    },
    button:{
        elevation: 0,
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0, height: 0


    }
})
