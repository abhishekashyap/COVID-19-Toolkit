import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewHeader from "../components/ViewHeader";
import ViewBody from "../components/ViewBody";

export default function Prevention() {
  const contentList = [
    { key: "1", content: "HANDS, Wash them often" },
    { key: "2", content: "ELBOW, Cough into it" },
    { key: "3", content: "FACE, Don't touch it" },
    { key: "4", content: "SPACE, Keep safe social distance" },
    { key: "5", content: "SICK? Stay home" }
  ];
  return (
    <View style={styles.container}>
      <ViewHeader
        title="Prevention"
        color="#16a085"
        subtitle="Prevention is better than cure"
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
