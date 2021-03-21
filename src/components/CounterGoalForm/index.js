import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import InputField from "../InputField";
import ButtonTextAndIcon from "../ButtonTextAndIcon";

import { colors } from "../../libs/colorTheme";
import * as actionTypes from "../../libs/actionTypes";

const CounterGoalForm = ({ goalFormState, goalFormDispatch, hideGoalForm }) => {
  const [rowsButtonHighlight, setRowsButtonHighlight] = useState(true);

  useEffect(() => {
    goalFormState.trackingType === "rows"
      ? setRowsButtonHighlight(true)
      : setRowsButtonHighlight(false);
  }, [goalFormState]);

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
              goalFormDispatch({ type: actionTypes.CHANGE_GOAL_TYPE_ROWS })
            }
            backgroundColor={rowsButtonHighlight ? colors.purple : colors.teal}
          />
          <ButtonTextAndIcon
            title="stitches"
            handlePress={() =>
              goalFormDispatch({ type: actionTypes.CHANGE_GOAL_TYPE_STITCHES })
            }
            backgroundColor={!rowsButtonHighlight ? colors.purple : colors.teal}
          />
        </View>
        <Text style={styles.labelText}>Target:</Text>
        <InputField
          isNumeric
          handleChange={(userInput) => {
            userInput &&
              goalFormDispatch({
                type: actionTypes.CHANGE_GOAL_TARGET,
                payload: userInput,
              });
          }}
          defaultValue={goalFormState.goalTarget.toString()}
        />
      </View>
      {goalFormState.goalTarget ? (
        <Text style={styles.goalText}>
          Your goal is to do {goalFormState.goalTarget}{" "}
          {goalFormState.trackingType}.
        </Text>
      ) : (
        <Text style={styles.goalText}>Enter a target above.</Text>
      )}
      <ButtonTextAndIcon title="Get stitching!" handlePress={hideGoalForm} />
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
    fontSize: 30,
    margin: 15,
    textAlign: "center",
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 18,
  },
  labelText: {
    fontSize: 22,
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  goalText: {
    fontSize: 20,
    marginBottom: 12,
    textAlign: "center",
  },
  choiceButtons: {
    flexDirection: "row",
    marginBottom: 12,
  },
});

export default CounterGoalForm;
