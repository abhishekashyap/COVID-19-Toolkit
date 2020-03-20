import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={[styles.title, globalStyles.text]}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  title: {
    textAlign: "left",
    fontSize: 40,
    color: "#4A4A4A",
  }
});
