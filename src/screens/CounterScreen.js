import React, { useReducer, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { colors } from "../libs/stylingVars";

import CounterGoalForm from "../components/CounterGoalForm";
import GoalTrackerContainer from "../components/GoalTrackerContainer";

import { initialGoalState, goalReducer } from "../libs/reducers/goalReducer.js";

function CounterScreen({ navigation }) {
  const [goalState, goalDispatch] = useReducer(goalReducer, initialGoalState);

  const [goalFormShowing, setGoalFormShowing] = useState(true);

  function hideGoalForm() {
    setGoalFormShowing(false);
  }
  function showGoalForm() {
    setGoalFormShowing(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      {goalFormShowing ? (
        <CounterGoalForm
          goalState={goalState}
          goalDispatch={goalDispatch}
          hideGoalForm={hideGoalForm}
        />
      ) : (
        <GoalTrackerContainer
          goalState={goalState}
          showGoalForm={showGoalForm}
          goalDispatch={goalDispatch}
          goalState={goalState}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CounterScreen;
