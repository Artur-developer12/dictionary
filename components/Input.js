import React, { useEffect, useState } from 'react'
import {StyleSheet, View, TextInput} from 'react-native'
import {connect} from 'react-redux'
 
import {fetchSearch} from '../redux/action'






const SearchBlock = ({noFocus, w100, searchData, fetchSearch}) => {

    useEffect(()=>{
        // fetchSearch()
        console.log('hahahahahhahahhahah',searchData)
    },[])



    const width = {
        width: w100 === true ? '100%': '90%'
    }

    const onSearch = async (value) => {}
  

        return (
            <View style={styles.inputBlock, width}>
                <TextInput 
                    style={styles.input}
                    placeholder="Введите текст"
                    placeholderTextColor={'#CFCFCF'}
                    autoFocus={!noFocus}
                    onChangeText={onSearch}
                />
            </View>
        )
    
}
const styles = StyleSheet.create({
   
    inputBlock:{
        width: '90%'
    },
    input:{
        backgroundColor:'#F7F7F7',
        borderRadius: 3,
        height: 50,
        paddingLeft: 20,
        fontFamily: 'Montserrat-Bold'
        
    },
})
const mapStateToProps = state => (
    { 
        searchData: state.searchData, 
    }
)
const mapDispachToProps = {
    fetchSearch
}


export default connect(mapStateToProps, mapDispachToProps)(SearchBlock)