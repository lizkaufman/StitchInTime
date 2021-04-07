import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import InputField from "../InputField";
import ButtonTextAndIcon from "../ButtonTextAndIcon";

import { colors, textSizes } from "../../libs/stylingVars";
import * as actionTypes from "../../libs/actionTypes";

const CounterGoalForm = ({ goalState, goalDispatch, hideGoalForm }) => {
  const [rowsButtonHighlight, setRowsButtonHighlight] = useState(true);

  useEffect(() => {
    goalState.trackingType === "rows"
      ? setRowsButtonHighlight(true)
      : setRowsButtonHighlight(false);
  }, [goalState]);

  const { width, height } = useDimensions().window;

  return (
    <View style={[styles.formContainer, { width: width * 0.8 }]}>
      <Text style={styles.header}>Set your goal:</Text>
      <View style={styles.inputs}>
        <Text style={styles.labelText}>I want to track:</Text>
        <View style={styles.choiceButtons}>
          <ButtonTextAndIcon
            title="rows"
            handlePress={() =>
              goalDispatch({ type: actionTypes.CHANGE_GOAL_TYPE_ROWS })
            }
            backgroundColor={rowsButtonHighlight ? colors.purple : colors.teal}
          />
          <ButtonTextAndIcon
            title="stitches"
            handlePress={() =>
              goalDispatch({ type: actionTypes.CHANGE_GOAL_TYPE_STITCHES })
            }
            backgroundColor={!rowsButtonHighlight ? colors.purple : colors.teal}
          />
        </View>
        <Text style={styles.labelText}>Target:</Text>
        <InputField
          isNumeric
          handleChange={(userInput) => {
            userInput &&
              goalDispatch({
                type: actionTypes.CHANGE_GOAL_TARGET,
                payload: Number(userInput),
              });
          }}
          defaultValue={goalState.goalTarget.toString()}
        />
      </View>
      {goalState.goalTarget ? (
        <Text style={styles.goalText}>
          Your goal is to do {goalState.goalTarget} {goalState.trackingType}.
        </Text>
      ) : (
        <Text style={styles.goalText}>Enter a target above.</Text>
      )}
      <ButtonTextAndIcon
        title="Get stitching!"
        handlePress={() => {
          goalState.goalTarget
            ? hideGoalForm()
            : Alert.alert("Your target can't be 0!", "Please input a target.");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightTealyGrey,
    paddingHorizontal: 40,
    paddingTop: 28,
    paddingBottom: 40,
    borderRadius: 10,
  },
  header: {
    fontWeight: "bold",
    fontSize: textSizes.headingText,
    margin: 15,
    textAlign: "center",
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 18,
  },
  labelText: {
    fontSize: textSizes.basicText,
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  goalText: {
    fontSize: textSizes.buttonText,
    marginBottom: 12,
    textAlign: "center",
  },
  choiceButtons: {
    flexDirection: "row",
    marginBottom: 12,
  },
});

export default CounterGoalForm;
