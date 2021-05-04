import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faPlus,
  faMinus,
  faSmileBeam,
  faSmile,
  faBook,
  faBookReader,
  faBookmark,
  faBookOpen,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";

import HomeScreen from "./src/screens/HomeScreen.js";
import CounterScreen from "./src/screens/CounterScreen.js";

//Adds specific Font Awesome icons to available library:
library.add(
  faPlay,
  faPlus,
  faMinus,
  faSmileBeam,
  faSmile,
  faBook,
  faBookmark,
  faBookReader,
  faBookOpen,
  faEraser
);
//TODO: Document icons used in readme!!

const Stack = createStackNavigator();
//Note: The navigation prop is passed down automatically by Stack.Navigator to all Stack.Screen components.

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Counter"
          component={CounterScreen}
          options={{ title: "Tracker" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
