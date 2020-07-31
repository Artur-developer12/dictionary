import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Settings from './Settings'

import Language from './options/Language'
import MyWord from './options/MyWord'
import FeedBack from './options/FeedBack'
import About from './options/About'

const Stack = createStackNavigator();
const setting = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Settings"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        
        >
          <Stack.Screen 
            name="Settings" 
            component={Settings} 
            options={{
                title: 'Настройки',
                headerTitleStyle: {
                    fontSize: 26,
                    fontFamily: 'Montserrat-Bold'
                }
            }}
            />
          <Stack.Screen name="Language" options={{title: 'Язык'}} component={Language} />
          <Stack.Screen name="FeedBack" options={{title: 'Обратная связь'}} component={FeedBack} />
          <Stack.Screen name="MyWord" options={{title: 'Мой слова'}} component={MyWord} />
          <Stack.Screen name="About" options={{title: 'О приложений'}} component={About} />
        </Stack.Navigator>
    )
}

export default setting

const styles = StyleSheet.create({})
