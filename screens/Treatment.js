import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewHeader from "../components/ViewHeader";
import ViewBody from "../components/ViewBody";

export default function App() {
  return (
    <View style={styles.container}>
      <ViewHeader title="Treatment" color="#34495e" />
      <ViewBody content="Labore consectetur reprehenderit Lorem ut esse do. Amet ex aute veniam nostrud cillum id irure. Culpa duis in cillum veniam ullamco. Amet elit cupidatat cupidatat aute voluptate ullamco est aute ut nisi consectetur enim. Ut labore quis commodo excepteur reprehenderit." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff" // For debug
  }
});
