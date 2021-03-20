import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ButtonOnlyIcon = ({
  handlePress,
  iconName,
  backgroundColor = "#009688",
  textColor = "#fff",
  textSize = 24,
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
      <FontAwesomeIcon color={textColor} size={textSize} icon={iconName} />
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
    flexDirection: "row",
  },
});

export default ButtonOnlyIcon;
