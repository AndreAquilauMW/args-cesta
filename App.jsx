import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from "@expo-google-fonts/montserrat";
import Cesta from './src/Screens/Cesta'


export default function App() {

  const [loadingFonts] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold
  });

  if(!loadingFonts) {
    return <SafeAreaView></SafeAreaView>
  }

  return (
    <SafeAreaView>
      <Cesta></Cesta>
      <StatusBar style="auto" />
      <SafeAreaView style=""></SafeAreaView>
    </SafeAreaView>
  );
}

