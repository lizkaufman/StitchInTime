import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import { colors } from "../../libs/stylingVars";

import ButtonTextAndIcon from "../ButtonTextAndIcon";
import Counter from "../Counter";

const GoalTrackerContainer = ({
  goalFormState,
  showGoalForm,
  counterDispatch,
  counterState,
}) => {
  const { width, height } = useDimensions().window;

  return (
    <SafeAreaView style={[styles.trackerContainer, { width: width * 0.8 }]}>
      <Text>
        Your goal is to do {goalFormState.goalTarget}{" "}
        {goalFormState.trackingType}.
      </Text>
      <Text>Current count: {counterState.currentCount}</Text>

      <Counter counterDispatch={counterDispatch} counterState={counterState} />

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
