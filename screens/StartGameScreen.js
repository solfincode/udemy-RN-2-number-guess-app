import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game screen!!!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.text}>Select a number</Text>
        <Input
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.primary} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.secondary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    marginVertical: 10,
    color: "black",
  },
  text: {
    fontSize: 18,
  },
  button: {
    width: 110,
  },
  input: {
    width: 50,
  },
});
export default StartGameScreen;
