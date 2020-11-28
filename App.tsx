import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

// Screens
import RecScreen from "./src/RecScreen";
import VoiceListScreen from "./src/VoiceListScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecScreen">
        <Stack.Screen name="RecScreen" component={RecScreen} />
        <Stack.Screen name="VoiceListScreen" component={VoiceListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
