import React from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

import ButtonOnlyText from "../components/ButtonOnlyText";

function CounterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi from the counter screen!</Text>
      <ButtonOnlyText
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
