import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Input = ({
  width = 150,
  isNumeric = false,
  handleChange,
  placeholder = "",
  returnKeyType = "done",
}) => {
  return (
    <TextInput
      style={[styles.input, isNumeric ? { width: 60 } : { width: width }]}
      keyboardType={isNumeric ? "number-pad" : "default"}
      placeholder={placeholder}
      onChange={handleChange}
      returnKeyType={returnKeyType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1.5,
    padding: 12,
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#fff",
  },
});

export default Input;
