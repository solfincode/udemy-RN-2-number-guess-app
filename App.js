import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//component
import Header from "./components/Header";

//screen
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View>
      <Header title="Guess the number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
