import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { colors, textSizes } from "../../libs/stylingVars";

const ButtonTextAndIcon = ({
  title,
  handlePress,
  iconName,
  backgroundColor = colors.teal,
  textColor = colors.white,
  textSize = textSizes.buttonText,
  isDisabled = false,
  fixedWidth = false,
  fixedWidthProportion,
}) => {
  const { width, height } = useDimensions().window;

  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        !isDisabled
          ? { backgroundColor: backgroundColor }
          : { backgroundColor: colors.lightGrey },
        //FIXME: Remove fixedWith boolean! Just code it so that if fixedWidthProportion is there, respond to it. (Remember to allow for someone putting in 0! It'll still read it as true.)
        fixedWidth && { width: width * fixedWidthProportion },
        // If fixedWith is true, set the width of the button to the width of the device * fixedWidthProportion (ex: 80% of width if fixedWidthProportion===0.8).
      ]}
      disabled={isDisabled ? true : false}
      //If isDisabled is true, grey button out and make it non-functional.
      onPress={handlePress}
    >
      {iconName && (
        <FontAwesomeIcon color={textColor} size={textSize} icon={iconName} />
      )}
      {title && (
        <Text
          style={[
            styles.buttonTextStyle,
            { color: textColor, fontSize: textSize },
            iconName && { paddingLeft: 14 },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    margin: 10,
    flexDirection: "row",
  },
  buttonTextStyle: {
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },
});

export default ButtonTextAndIcon;
