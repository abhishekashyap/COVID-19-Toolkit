import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function ViewBody(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.map}
          source={{
            uri:
              "https://cdn.technologyreview.com/i/images/screen-shot-2020-03-06-at-14.59.42.png?sw=2500&cx=0&cy=0&cw=1127&ch=989"
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignContent: "center"
  },
  map: {
    flex: 1,
    resizeMode: "stretch",
    height: 300
  }
});
