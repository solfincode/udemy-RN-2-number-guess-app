import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View>
      <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
export default Input;
