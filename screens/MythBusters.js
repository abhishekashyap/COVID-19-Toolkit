import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewHeader from "../components/ViewHeader";
import ViewBody from "../components/ViewBody";

export default function Myths() {
  const contentList = [
    { key: "1", content: "COVID-19 virus can be transmitted in areas with hot and humid climates" },
    { key: "2", content: "Cold weather and snow CANNOT kill the new coronavirus" },
    { key: "3", content: "Taking a hot bath does not prevent the new coronavirus disease" },
    { key: "4", content: "The new coronavirus CANNOT be transmitted through mosquito bites." }
  ];
  return (
    <View style={styles.container}>
      <ViewHeader
        title="Myth busters"
        color="#9b59b6"
        subtitle="Don't believe everything you hear. Here are some truths about the COVID-19."
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
