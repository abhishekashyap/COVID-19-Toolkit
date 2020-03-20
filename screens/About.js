import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewHeader from "../components/ViewHeader";

export default function About() {
  const contentList = [
    { key: "1", content: "Cough" },
    { key: "2", content: "Tiredness" },
    { key: "3", content: "Fever" },
    { key: "4", content: "Difficulty in breathing" }
  ];
  return (
    <View style={styles.container}>
      <ViewHeader
        title="About"
        color="#f7b731"
        subtitle="Hi, I am Abhishek, independent fullstack developer. I am a student currently studying computer science."
      />
      <Text>
        
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff" // For debug
  }
});
