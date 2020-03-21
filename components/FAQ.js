import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { globalStyles } from "../styles/global";

export default function ViewBody(props) {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.header}>{props.header}</Text>
      <FlatList
        data={props.contentList}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <View>
              <Text style={[styles.question, globalStyles.text]}>
                {item.key}. {item.question}
              </Text>
              <Text style={[styles.answer, globalStyles.text]}>
                {item.answer}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  header: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "circular-std"
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    marginBottom: 20,
    borderRadius: 10
  },
  question: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    margin: 5
  },
  answer: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    margin: 10,
    backgroundColor: "#78e08f",
    borderRadius: 10
  }
});
