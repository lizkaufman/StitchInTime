import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

//TODO: Install react-navigation and import all the screens here for it to use
//"The app.js file is usually used for the initial screen you want to display on start-up of the app. But also most people make this app.js file into a navigator file where you can import all the navigation screens."
//(reference: https://stackoverflow.com/questions/62176307/how-do-you-structure-components-and-screens-when-using-expo-native-base-and-rea)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
      <StatusBar />
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
