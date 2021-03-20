import React from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

import ButtonWithText from "../components/ButtonWithText";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi from the home screen!</Text>
      <ButtonWithText
        title="Start tracking!"
        handlePress={() => navigation.push("Counter")}
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

export default HomeScreen;
