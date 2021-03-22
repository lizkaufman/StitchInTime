import React, { useReducer, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { colors } from "../libs/stylingVars";

import CounterGoalForm from "../components/CounterGoalForm";
import GoalTrackerContainer from "../components/GoalTrackerContainer";

import {
  initialGoalFormState,
  goalFormReducer,
} from "../libs/reducers/goalFormReducer.js";
import {
  initialCounterState,
  counterReducer,
} from "../libs/reducers/counterReducer";

function CounterScreen({ navigation }) {
  const [goalFormState, goalFormDispatch] = useReducer(
    goalFormReducer,
    initialGoalFormState
  );
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    initialCounterState
  );

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
          goalFormState={goalFormState}
          goalFormDispatch={goalFormDispatch}
          hideGoalForm={hideGoalForm}
        />
      ) : (
        <GoalTrackerContainer
          goalFormState={goalFormState}
          showGoalForm={showGoalForm}
          counterDispatch={counterDispatch}
          counterState={counterState}
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
