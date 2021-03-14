import React from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

function CounterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi from the counter screen!</Text>
      <Button onPress={() => navigation.navigate("Home")} title="Home" />
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
