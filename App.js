import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
 

// My components
import search from './screen/Search/SearchNavigate'
import Setting from './screen/Settings/SettingNavigate'
import  getFonts from './fonts'

// redux
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

import {reducer} from './redux/reducer'
const store = createStore(reducer, compose(applyMiddleware(thunk)))


export default function App() {
  const [fontLoaded, setFontsLoaded] = useState(false)
  const Tab = createBottomTabNavigator();

  if(fontLoaded){
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Tab.Navigator
              tabBarOptions={{
                keyboardHidesTabBar: false
              }}  
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;
                  if (route.name === 'Home') {
                    iconName = 'md-search'
                  } else if (route.name === 'Settings') {
                    iconName = 'md-settings'
                  }
      
                  return <Ionicons name={iconName} size={26} color={color} />;
                },
                
              })}
              tabBarOptions={{
                activeTintColor: '#0058C0',
                inactiveTintColor: '#BCBCBC',
                showLabel: false
              }}
          >
            <Tab.Screen name="Home" component={search} />
            <Tab.Screen name="Settings" component={Setting} />
          </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  );
  }
  else{
    return(
    <AppLoading
      startAsync={getFonts}
      onFinish = {() => setFontsLoaded(true)}
    />
    )
  }
}

const styles = StyleSheet.create();
