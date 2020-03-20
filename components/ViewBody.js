import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ViewBody(props) {
  return (
    <View style={styles.bodyContainer}>
      <Text style={[styles.content, globalStyles.text]}>{props.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  }
});
