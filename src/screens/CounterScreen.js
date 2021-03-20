import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import ButtonTextAndIcon from "../components/ButtonTextAndIcon";
import CounterGoalForm from "../components/CounterGoalForm";

function CounterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hi from the counter screen!</Text>
      <ButtonTextAndIcon
        title="Home"
        handlePress={() => navigation.navigate("Home")}
      /> */}
      <CounterGoalForm />
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
