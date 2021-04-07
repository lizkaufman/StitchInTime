import React, { useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import { colors } from "../../libs/stylingVars";
import * as actionTypes from "../../libs/actionTypes";

import ButtonTextAndIcon from "../ButtonTextAndIcon";
import InputField from "../InputField";

const Counter = ({ goalDispatch, goalState }) => {
  const { width, height } = useDimensions().window;

  useEffect(() => {
    updateGoalCompletionStats();
  }, []);

  function updateGoalCompletionStats() {
    goalDispatch({ type: actionTypes.CALCULATE_PERCENT_COMPLETE });
    goalDispatch({ type: actionTypes.CALCULATE_HOW_MANY_LEFT });
  }

  return (
    <View style={[styles.counter, { width: width * 0.8 }]}>
      <InputField
        isNumeric
        textSize={24}
        defaultValue={goalState.counterIncrement.toString()}
        handleChange={(userInput) => {
          goalDispatch({
            type: actionTypes.CHANGE_COUNTER_INCREMENT,
            payload: Number(userInput),
          });
        }}
      />
      <View style={styles.buttonContainer}>
        <ButtonTextAndIcon
          textSize={24}
          iconName="plus"
          handlePress={() => {
            goalDispatch({
              type: actionTypes.ADD_TO_COUNTER,
            });
            updateGoalCompletionStats();
          }}
        />
        <ButtonTextAndIcon
          textSize={24}
          iconName="minus"
          handlePress={() => {
            goalDispatch({
              type: actionTypes.SUBTRACT_FROM_COUNTER,
            });
            updateGoalCompletionStats();
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
                    goalDispatch({
                      type: actionTypes.RESET_CURRENT_COUNT,
                    });
                    updateGoalCompletionStats();
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
    paddingBottom: 35,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Counter;
