import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// RecScreenNavigationProp型を定義
type RecScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RecScreen"
>;

// Props型を定義
type Props = {
  navigation: RecScreenNavigationProp;
};

export default function RecScreen(props: Props) {
  const { navigation } = props;

  // 画面の遷移
  const goToVoiceList = () => {
    navigation.navigate("VoiceListScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToVoiceList}>
        <Text> RecScreenの画面 </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
