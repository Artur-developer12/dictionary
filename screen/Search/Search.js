import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import SelectLanguage from '../../components/SelectLanguage'

 



const Search = ({navigation}) =>  {

    useEffect(()=>{

    })
    
    
    
    return (
        <View style={styles.conteiner}>
        <StatusBar barStyle={"light-content"} style="auto" />
                <View style={styles.search}>
                    <SelectLanguage/>
                    <TouchableWithoutFeedback onPress={()=>navigation.navigate('SearchActive')}>
                        <View style={styles.startSearch} >
                            <View>
                                <Text style={styles.startSearchText}>Введите текст</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.recently}>
                    {/* <View style={styles.recentlyBlock}>  
                        <TouchableNativeFeedback>
                            <View style={styles.recentlyItem}>
                                <FontAwesome5 style={styles.recentlyIcon} name="search" size={18}  />
                                <Text style={styles.recentlyText}>Хабзэ</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.recentlyCleat}>Очистить историю</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        )
    
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor: '#fff'
    },
    search:{
        alignItems: 'center',
        backgroundColor: '#60A9FF',
        paddingVertical: 40
    },
    startSearch:{
        width: '90%',
        justifyContent:'center',
        backgroundColor:'#F7F7F7',
        borderRadius: 3,
        height: 50,
        paddingLeft: 20,
    },
    startSearchText:{
        fontFamily: 'Montserrat-Bold',
        color: '#CFCFCF'
    },
   
    
    recentlyBlock:{
        alignItems: 'center',
        
    },
    recentlyItem:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        paddingLeft: 30,
        height: 50,
        backgroundColor: '#fff',
        borderRadius:5,
        width: '95%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: .20,
        shadowRadius: 1.41,
        elevation: 2,

    },
    recentlyIcon:{
        opacity: .3,
        color: '#000',
        marginRight: 10
    },
    recentlyText:{
        fontFamily:'Montserrat-Regular',
        fontSize: 16
    },
    recentlyCleat:{
        textAlign: 'center',
        marginTop: 15,
        fontSize: 13,
        fontFamily: 'Montserrat-Bold',
        opacity: 0.3

    }
})
 
export default Search
