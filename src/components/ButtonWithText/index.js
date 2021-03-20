import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ButtonWithText = ({
  title,
  handlePress,
  backgroundColor = "#009688",
  textColor = "#fff",
  textSize = 20,
  isDisabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        !isDisabled
          ? { backgroundColor: backgroundColor }
          : { backgroundColor: "#d8d8d8" },
      ]}
      disabled={isDisabled ? true : false}
      onPress={handlePress}
    >
      <Text
        style={[
          styles.buttonTextStyle,
          { color: textColor, fontSize: textSize },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 15,
  },
  buttonTextStyle: {
    // fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },
});

export default ButtonWithText;
