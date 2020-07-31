import React from 'react'
import { Text, StyleSheet, View, TouchableNativeFeedback, StatusBar } from 'react-native'
import { MaterialIcons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';

const  Setting = ({navigation}) =>{


    const setting = [
        {
            icon:  <MaterialIcons style={styles.settingIcon} name="language" size={24} color="black" />,
            text: 'Язык',
            navigate: 'Language'
        },
        {
            icon: <MaterialIcons style={styles.settingIcon} name="bookmark-border" size={24} color="black" />,
            text: 'Мой слова',
            navigate: 'MyWord'
        },
        {
            icon: <FontAwesome style={styles.settingIcon} name="share-alt" size={24} color="black" />,
            text: 'Поделиться',
        },
        {
            icon: <MaterialCommunityIcons style={styles.settingIcon} name="tooltip-text-outline" size={24} color="black" />,
            text: 'Обратная связь',
            navigate: 'FeedBack'
        },
        {
            icon: <FontAwesome style={styles.settingIcon} name="file-text" size={24} color="black" />,
            text: 'О приложени',
            navigate: 'About'
        },

        
    ];

   
        return (
            <View style={styles.conteiner}>

                {setting.map((item, index)=>{

                    return(
                    <TouchableNativeFeedback key={index}  onPress={() => item.navigate && navigation.navigate(item.navigate)}>
                       <View style={styles.setting} >
                            {item.icon}
                           <Text style={styles.settingText}>{item.text}</Text>
                       </View>
                    </TouchableNativeFeedback>
                    )
                })
                
                }
            </View>
           )  
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: '#fff',
        flex: 1,
        
    },
    
    setting:{
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        paddingLeft: 20,

    },
    settingIcon:{
        fontSize: 24,
        color: '#000',
        opacity: 0.3,
        marginRight: 20,
    },
    settingText:{
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    }
})


export default Setting 