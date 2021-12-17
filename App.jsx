import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from "@expo-google-fonts/montserrat";
import AppLoading from 'expo-app-loading';
import Cesta from './src/Screens/Cesta';
import mock from "./src/Mocks/Cesta";


export default function App() {

  const [loadingFonts] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold
  });

  if(!loadingFonts) {
    return <AppLoading></AppLoading>
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Cesta {...mock}></Cesta>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

