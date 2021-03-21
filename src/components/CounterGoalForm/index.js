import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import InputField from "../InputField";
import ButtonTextAndIcon from "../ButtonTextAndIcon";

import { colors } from "../../libs/colorTheme";
import * as actionTypes from "../../libs/actionTypes";

const CounterGoalForm = ({ goalFormState, goalFormDispatch }) => {
  const [rowsButtonHighlight, setRowsButtonHighlight] = useState(true);

  useEffect(() => {
    goalFormState.trackingType === "rows"
      ? setRowsButtonHighlight(true)
      : setRowsButtonHighlight(false);
  }, [goalFormState]);

  return (
    <View style={styles.formContainer}>
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
          handleChange={(e) => {
            goalFormDispatch({
              type: actionTypes.CHANGE_GOAL_TARGET,
              payload: e.target.value,
            });
          }}
        />
      </View>
      <ButtonTextAndIcon title="Get stitching!" />
      {/* FIXME: Text element below for testing. Delete when it proves the form works! */}
      <Text>
        {goalFormState.target} {goalFormState.trackingType}
      </Text>
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
  choiceButtons: {
    flexDirection: "row",
    marginBottom: 12,
  },
});

export default CounterGoalForm;
