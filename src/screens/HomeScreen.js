import React from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

import ButtonOnlyText from "../components/ButtonOnlyText";
import ButtonTextAndIcon from "../components/ButtonTextAndIcon";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi from the home screen!</Text>
      <ButtonOnlyText
        title="Start tracking!"
        handlePress={() => navigation.push("Counter")}
      />
      <ButtonTextAndIcon title="icon button test" iconName="play" />
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
