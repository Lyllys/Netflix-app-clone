import { StatusBar } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import AppLoading from 'expo-app-loading';
import { useFonts, NotoSansJP_300Light } from '@expo-google-fonts/noto-sans-jp';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RotaAutenticacao from './src/Navigation/RotaAutenticacao';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  let [fontsLoaded] = useFonts({
    NotoSansJP_300Light
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <SafeAreaProvider style={styles.container} >
      
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
         
        <RotaAutenticacao />
      </NavigationContainer>
    </SafeAreaProvider>


  );
}

