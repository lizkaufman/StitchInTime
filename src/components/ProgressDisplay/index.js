import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import ProgressBar from "react-native-progress/Bar";

import { colors, textSizes } from "../../libs/stylingVars";

const ProgressDisplay = ({
  currentCount,
  goalTarget,
  trackingType,
  percentComplete,
  leftToDo,
}) => {
  const { width, height } = useDimensions().window;

  return (
    <Animated.View
      style={[styles.progressDisplayContainer, { width: width * 0.8 }]}
    >
      <Text style={styles.percentText}>{percentComplete}%</Text>
      <ProgressBar
        progress={percentComplete / 100}
        color={percentComplete < 100 ? colors.purple : colors.gold}
        borderColor={percentComplete < 100 ? colors.purple : colors.gold}
        borderRadius={3}
        width={width * 0.65}
        height={10}
      />
      <View style={styles.progressTextContainer}>
        <Text style={styles.progressText}>
          {currentCount} of {goalTarget} {trackingType}
        </Text>
        {leftToDo ? (
          <Text style={styles.progressText}>Just {leftToDo} more to go!</Text>
        ) : (
          <Text style={styles.progressText}>You met your goal!</Text>
        )}
      </View>
    </Animated.View>
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
    marginBottom: 20,
  },
  progressTextContainer: {
    marginTop: 20,
  },
  progressText: {
    fontSize: textSizes.copyText,
    textAlign: "center",
  },
  percentText: {
    fontSize: textSizes.basicText,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ProgressDisplay;
