import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { colors } from "../../libs/stylingVars";

const Input = ({
  width = 150,
  isNumeric = false,
  handleChange,
  placeholder = "",
  returnKeyType = "done",
  defaultValue = "",
  textSize = 20,
}) => {
  return (
    <TextInput
      style={[
        styles.input,
        isNumeric ? { width: 60 } : { width: width },
        { fontSize: textSize },
      ]}
      keyboardType={isNumeric ? "number-pad" : "default"}
      placeholder={placeholder}
      onChangeText={handleChange}
      returnKeyType={returnKeyType}
      defaultValue={defaultValue}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1.5,
    padding: 12,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: colors.white,
  },
});

export default Input;
