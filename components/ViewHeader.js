import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ViewHeader(props) {
  return (
    <View style={styles.header} backgroundColor={ props.color }>
      <Text style={[styles.title, globalStyles.text]}>{props.title}</Text>
      <Text style={[styles.subtitle, globalStyles.text]}>{props.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#333", // fallback
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    textAlign: "left",
    fontSize: 40,
    color: "#fff",
    paddingBottom: 10
  },
  subtitle: {
    color: '#ecf0f1',
    fontSize: 15
  }
});
