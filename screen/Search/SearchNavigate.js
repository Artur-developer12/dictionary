import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Search from './Search'
import SearchActive from './SearchActive'
import SelectLanguage from '../../components/SelectLanguage'
 


const Stack = createStackNavigator();
 
const SearchNavigate = () => {

    return (
        <Stack.Navigator initialRouteName="Search" 
            screenOptions={{
                headerTitleAlign: 'center',
                headerShown: false
             }}
             
             
          >
          <Stack.Screen 
            name="Search" 
            component={Search}
            options={{
                headerStyle:{
                    backgroundColor: '#278BFF',
                    shadowColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0,

                },
                headerTitle: ''
            }} 
             
          />
          <Stack.Screen 
            name="SearchActive" 
            component={SearchActive} 
            options={{
                animationEnabled: false,
                headerStyle:{
                    backgroundColor: '#fff',
                    shadowColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0,

                },
                headerTitle: ''
            }} 
          />
            
        </Stack.Navigator>
    )
}

export default SearchNavigate

const styles = StyleSheet.create({})
