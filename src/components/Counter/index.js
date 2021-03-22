import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import { colors } from "../../libs/stylingVars";
import * as actionTypes from "../../libs/actionTypes";

import ButtonTextAndIcon from "../ButtonTextAndIcon";
import InputField from "../InputField";

const Counter = ({ counterDispatch, counterState }) => {
  const { width, height } = useDimensions().window;

  return (
    <View style={[styles.counter, { width: width * 0.8 }]}>
      <InputField
        isNumeric
        textSize={24}
        defaultValue={counterState.counterIncrement.toString()}
        handleChange={(userInput) => {
          counterDispatch({
            type: actionTypes.CHANGE_COUNTER_INCREMENT,
            payload: userInput,
          });
        }}
      />
      <View style={styles.buttonContainer}>
        <ButtonTextAndIcon
          textSize={24}
          iconName="plus"
          handlePress={() => {
            counterDispatch({
              type: actionTypes.ADD_TO_COUNTER,
            });
          }}
        />
        <ButtonTextAndIcon
          textSize={24}
          iconName="minus"
          handlePress={() => {
            counterDispatch({
              type: actionTypes.SUBTRACT_FROM_COUNTER,
            });
          }}
        />
        <ButtonTextAndIcon
          textSize={24}
          iconName="eraser"
          handlePress={() => {
            Alert.alert(
              "Confirm reset",
              "Are you sure you want to reset your progress back to 0?",
              [
                {
                  text: "No, keep my progress.",
                  onPress: () => {},
                  style: "cancel",
                },
                {
                  text: `Yes, reset my progress to 0.`,
                  onPress: () => {
                    counterDispatch({
                      type: actionTypes.RESET_CURRENT_COUNT,
                    });
                  },
                },
              ]
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightTealyGrey,
    paddingHorizontal: 40,
    paddingTop: 28,
    paddingBottom: 40,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Counter;
