import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import { colors } from "../../libs/colorTheme";

import ButtonTextAndIcon from "../ButtonTextAndIcon";

const GoalTrackerContainer = ({ goalFormState, showGoalForm }) => {
  const { width, height } = useDimensions().window;

  return (
    <View style={[styles.trackerContainer, { width: width * 0.8 }]}>
      <Text>
        Your goal is to do {goalFormState.goalTarget}{" "}
        {goalFormState.trackingType}.
      </Text>
      <ButtonTextAndIcon title="Change your goal" handlePress={showGoalForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  trackerContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightTealyGrey,
    paddingHorizontal: 40,
    paddingTop: 28,
    paddingBottom: 40,
    borderRadius: 10,
  },
});

export default GoalTrackerContainer;
