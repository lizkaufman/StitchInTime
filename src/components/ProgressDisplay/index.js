import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import ProgressBar from "react-native-progress/Bar";

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
      <ProgressBar
        progress={percentComplete / 100}
        color={percentComplete < 100 ? colors.purple : colors.gold}
        borderColor={percentComplete < 100 ? colors.purple : colors.gold}
        borderRadius={3}
        width={width * 0.65}
        height={10}
      />
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
