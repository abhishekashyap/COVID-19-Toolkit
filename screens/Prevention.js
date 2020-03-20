import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewHeader from "../components/ViewHeader";

export default function App() {
  return (
    <View style={styles.container}>
      <ViewHeader title="Prevention" />
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
