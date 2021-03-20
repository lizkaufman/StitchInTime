import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import ButtonTextAndIcon from "../components/ButtonTextAndIcon";

function HomeScreen({ navigation }) {
  const { width, height } = useDimensions().window;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://via.placeholder.com/150",
          width: width * 0.4,
          height: width * 0.4,
        }}
        style={styles.mainLogoImg}
      />
      <View style={[styles.textContainer]}>
        <Text style={styles.header}>Stitch In Time</Text>
        <Text style={[styles.subheader, { width: width * 0.8 }]}>
          Track rows and stitches with ease.
        </Text>
        <Text style={[styles.subheader, { width: width * 0.8 }]}>
          Tap "Start tracking" to get started. Other features are coming soon!
        </Text>
      </View>
      <ButtonTextAndIcon
        title="Start tracking!"
        handlePress={() => navigation.push("Counter")}
        iconName="play"
        fixedWidth
        fixedWidthProportion="0.5"
      />
      <ButtonTextAndIcon
        title="New project"
        iconName="plus"
        isDisabled
        fixedWidth
        fixedWidthProportion="0.5"
      />
      <ButtonTextAndIcon
        title="My profile"
        iconName="smile-beam"
        isDisabled
        fixedWidth
        fixedWidthProportion="0.5"
      />
      <ButtonTextAndIcon
        title="Resources"
        iconName="book-open"
        isDisabled
        fixedWidth
        fixedWidthProportion="0.5"
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
  mainLogoImg: { borderRadius: 10 },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    margin: 15,
    textAlign: "center",
    marginBottom: 25,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: "center",
  },
});

export default HomeScreen;
