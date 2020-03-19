import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Prevention page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff" // For debug
  }
});
