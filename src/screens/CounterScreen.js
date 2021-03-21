import React, { useReducer } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import ButtonTextAndIcon from "../components/ButtonTextAndIcon";
import CounterGoalForm from "../components/CounterGoalForm";

import {
  initialGoalFormState,
  goalFormReducer,
} from "../libs/reducers/goalFormReducer.js";
import * as actionTypes from "../libs/actionTypes";

function CounterScreen({ navigation }) {
  const [goalFormState, goalFormDispatch] = useReducer(
    goalFormReducer,
    initialGoalFormState
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hi from the counter screen!</Text>
      <ButtonTextAndIcon
        title="Home"
        handlePress={() => navigation.navigate("Home")}
      /> */}
      <CounterGoalForm
        goalFormState={goalFormState}
        goalFormDispatch={goalFormDispatch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CounterScreen;
