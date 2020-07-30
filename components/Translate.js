import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Button, TouchableNativeFeedback, TextInput } from 'react-native'
import { FontAwesome, MaterialIcons,AntDesign} from '@expo/vector-icons';
import Modal from 'react-native-modal'

import RadioButton from '../components/RadioButton'
import SelfModal from '../components/SelfModal'


const Translate = () => {

    const [visible, setVisible] = useState(false)
    const closeModal = () => setVisible(false)


    return (
        <View style={styles.translate}>
          <SelfModal visible={visible} closeModal={closeModal}/>
            <View style = {styles.wordBlock}>
                <Text style={styles.Word}>Акъыл</Text>
                <View style = {styles.Value}>
                    <Text style = {styles.ValueText}>ум, разум, сознание</Text>
                    <TouchableHighlight
                         activeOpacity={0.6}
                         underlayColor="#DDDDDD"
                         onPress={() => console.log('sound!')}
                         style={styles.ValueSoundClick}
                    >
                        <FontAwesome style = {styles.ValueSound} name="volume-up" />
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.button}>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => setVisible(true)}
                        style={styles.buttonErrorClick}
                    >
                        <MaterialIcons style={styles.buttonError} name="error"/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => console.log('click!')}
                        style={styles.buttonBookmarkClick}
                    >
                        <MaterialIcons style={styles.buttonBookmark} name="bookmark-border" />
                </TouchableHighlight>
                
            </View>
        </View>
    )
}

export default Translate

const styles = StyleSheet.create({
    
    // modal /
    translate:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingBottom: 20

    },
    Word:{
        fontSize: 30,
        fontFamily: 'Roboto-Bold'
    },
    Value:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    ValueText:{
        fontSize: 16,
        color: '#0679FF',
        fontFamily: 'Montserrat-Regular'

    },
    ValueSound:{
        fontSize: 24,
        color: '#0679FF',
    },
    ValueSoundClick:{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    button:{
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    buttonError:{
        color: '#0679FF',
        fontSize: 24,
    },
    buttonErrorClick:{
        padding: 10,
        borderRadius: 50,
        marginRight: 10
    },
    buttonBookmark:{
        color: '#0679FF',
        fontSize: 24,
    },
    buttonBookmarkClick:{
        padding: 10,
        borderRadius: 50,
    }
})
