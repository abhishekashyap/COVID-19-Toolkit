import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewHeader from "../components/ViewHeader";
import ViewBody from "../components/ViewBody";

export default function Treatment() {
  const contentList = [
    { key: "1", content: "Rest and sleep" },
    { key: "2", content: "Drink plenty of liquid" },
    {
      key: "3",
      content:
        "Use a room humidifier or take a hot shower to help ease a sore throat and cough"
    }
  ];
  return (
    <View style={styles.container}>
      <ViewHeader
        title="Treatment"
        color="#34495e"
        subtitle="There is no specific medicine to prevent or treat coronavirus disease (COVID-19). 
        You can relieve your symptoms if you:"
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
