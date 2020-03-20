import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewHeader from "../components/ViewHeader";
import Map from "../components/Map";

export default function WorldMap() {
  const contentList = [
    { key: "1", content: "Cough" },
    { key: "2", content: "Tiredness" },
    { key: "3", content: "Fever" },
    { key: "4", content: "Difficulty in breathing" }
  ];
  return (
    <View style={styles.container}>
      <ViewHeader
        title="World Map"
        color="#27ae60"
        subtitle="Infected areas"
      />
      <Map/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff" // For debug
  }
});
