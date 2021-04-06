import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import { colors } from "../../libs/stylingVars";

const ProgressDisplay = ({
  currentCount,
  goalTarget,
  trackingType,
  percentComplete,
  leftToDo,
}) => {
  const { width, height } = useDimensions().window;

  return (
    <View style={[styles.progressDisplayContainer, { width: width * 0.8 }]}>
      <Text>
        {currentCount} of {goalTarget} {trackingType} completed
      </Text>
      <Text>{percentComplete}%</Text>
      {leftToDo ? (
        <Text>Just {leftToDo} more to go!</Text>
      ) : (
        <Text>You met your goal!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  progressDisplayContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightTealyGrey,
    paddingHorizontal: 40,
    paddingTop: 28,
    paddingBottom: 40,
    borderRadius: 10,
  },
});

export default ProgressDisplay;
