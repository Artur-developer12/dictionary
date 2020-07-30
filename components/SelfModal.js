import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Button, TouchableNativeFeedback, TextInput } from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import Modal from 'react-native-modal'

import RadioButton from './RadioButton'

const SelfModal = ({visible, closeModal}) => {
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

    
    return (
        <Modal  
        isVisible={visible}
        // onSwipeStart={()=>closeModal()}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={600}
        style={styles.modalBotom}
        swipeDirection="left"
        hideModalContentWhileAnimating={true}
        useNativeDriver={false}
        
    >   
            <View style={styles.moadalContainer}>
                <TouchableHighlight 
                    onPress={()=>closeModal()}
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
                <View>
                    <TextInput 
                        style={styles.input}
                        placeholder="Введите текст"
                        placeholderTextColor={'#CFCFCF'}
                    />
                    <TouchableNativeFeedback>
                            <Button onPress={() =>console.log('send')} title="Отправить"/>
                    </TouchableNativeFeedback>
                </View>
        </View>
    </Modal>
    )
}

export default SelfModal

const styles = StyleSheet.create({
    modalBotom:{
        justifyContent: "flex-end",
        margin: 0,
    },
    moadalContainer:{
        width: '100%',
        height: 400,
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
    input:{
        backgroundColor:'#F7F7F7',
        alignItems: 'flex-start',
        borderRadius: 3,
        height: 100,
        paddingLeft: 20,
        fontFamily: 'Montserrat-Bold'
    },
})
