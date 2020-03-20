import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewHeader from "../components/ViewHeader";
import ViewBody from "../components/ViewBody";

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
        title="Symptoms"
        color="#e74c3c"
        subtitle="People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment."
      />
      <ViewBody
        contentList={contentList}
        listIcon="md-checkmark-circle"
        listIconColor="green"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff" // For debug
  }
});
