import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import { colors } from "../../libs/stylingVars";

import ButtonTextAndIcon from "../ButtonTextAndIcon";
import Counter from "../Counter";
import ProgressDisplay from "../ProgressDisplay";

const GoalTrackerContainer = ({ goalState, showGoalForm, goalDispatch }) => {
  const { width, height } = useDimensions().window;

  console.log("At GoalTrackerContainer: ", goalState);

  return (
    <SafeAreaView style={[styles.trackerContainer, { width: width * 0.8 }]}>
      <ProgressDisplay
        currentCount={goalState.currentCount}
        goalTarget={goalState.goalTarget}
        trackingType={goalState.trackingType}
        percentComplete={goalState.percentComplete}
        leftToDo={goalState.leftToDo}
      />

      <Counter goalDispatch={goalDispatch} goalState={goalState} />

      <ButtonTextAndIcon title="Change your goal" handlePress={showGoalForm} />
      <ButtonTextAndIcon
        iconName="book-reader"
        title="Help"
        backgroundColor={colors.darkTealyGrey}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  trackerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GoalTrackerContainer;
