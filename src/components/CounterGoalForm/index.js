import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import InputField from "../InputField";
import ButtonTextAndIcon from "../ButtonTextAndIcon";

const CounterGoalForm = () => {
  const [goalData, setGoalData] = useState({ rows: false, target: 1 });

  return (
    <View style={styles.formContainer}>
      <Text style={styles.header}>Set your goal:</Text>
      <View style={styles.inputs}>
        <Text style={styles.labelText}>I want to track:</Text>
        <View style={styles.choiceButtons}>
          <ButtonTextAndIcon title="stitches" />
          <ButtonTextAndIcon title="rows" />
        </View>
        <Text style={styles.labelText}>Target:</Text>
        <InputField isNumeric />
      </View>
      <ButtonTextAndIcon title="Get stitching!" />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BEBEBE",
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
  },
  choiceButtons: {
    flexDirection: "row",
    marginBottom: 12,
  },
});

export default CounterGoalForm;
