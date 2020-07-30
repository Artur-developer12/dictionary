import * as fonts from 'expo-font'

const getFonts = () =>{
    return fonts.loadAsync({
      'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
      'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
      'Montserrat-LightItalic': require('./assets/fonts/Montserrat-LightItalic.ttf'),

      'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  
    })
  
  } 

  export default getFonts