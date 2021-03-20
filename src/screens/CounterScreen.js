import React from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

import ButtonWithText from "../components/ButtonWithText";

function CounterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi from the counter screen!</Text>
      <ButtonWithText
        title="Home"
        handlePress={() => navigation.navigate("Home")}
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
