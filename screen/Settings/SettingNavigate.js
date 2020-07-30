import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import SettingMain from './Settings'
import Language from './options/Language'

const Stack = createStackNavigator();
const setting = () => {
    return (
        <Stack.Navigator 
            initialRouteName="SettingMain"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        
        >
          <Stack.Screen 
            name="SettingMain" 
            component={SettingMain} 
            options={{
                title: 'Настройки',
                headerTitleStyle: {
                    fontSize: 30,
                    fontFamily: 'Montserrat-SemiBold'
                    

                }
            }}
            />
          <Stack.Screen name="Language" options={{title: 'Язык'}} component={Language} />
        </Stack.Navigator>
    )
}

export default setting

const styles = StyleSheet.create({})
