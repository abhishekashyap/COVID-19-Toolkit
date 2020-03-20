import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { FontAwesome } from "@expo/vector-icons";
import ViewHeader from "../components/ViewHeader";
import { globalStyles } from "../styles/global";

export default function About() {
  async function _handleOpenWHOWebBrowser() {
    await WebBrowser.openBrowserAsync(
      "https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
    );
  }
  async function _handleOpenMITWebBrowser() {
    await WebBrowser.openBrowserAsync(
      "https://www.technologyreview.com/s/615330/best-worst-coronavirus-dashboards/"
    );
  }
  async function _handleLinkedinWebBrowser() {
    await WebBrowser.openBrowserAsync(
      "https://www.linkedin.com/in/abhishek-kashyap-86b01676/"
    );
  }
  async function _handleEmailWebBrowser() {
    await WebBrowser.openBrowserAsync(
      "mailto:abhishek2089.cse18@chitkara.edu.in"
    );
  }
  async function _handleGithubWebBrowser() {
    await WebBrowser.openBrowserAsync("https://github.com/abhishekashyap");
  }
  return (
    <View style={styles.container}>
      <ViewHeader
        title="About"
        color="#f7b731"
        subtitle="Hi, I am Abhishek, independent fullstack developer. I am a student currently studying computer science."
      />
      <View style={styles.sources}>
        <Text style={[styles.subtitle, globalStyles.text]}>Sources:</Text>
        <Button
          title="World Health Organization"
          color="#333"
          onPress={_handleOpenWHOWebBrowser}
          style={styles.button}
        />
        <Button
          title="MIT Technology review"
          color="#333"
          onPress={_handleOpenMITWebBrowser}
          style={styles.button}
        />
      </View>
      <View style={styles.sources}>
        <Text style={[styles.subtitle, globalStyles.text]}>Contact:</Text>
        <FontAwesome.Button
          name="linkedin"
          color="#333"
          onPress={_handleLinkedinWebBrowser}
          style={styles.button}
        >
          linkedin
        </FontAwesome.Button>
        <FontAwesome.Button
          name="envelope-o"
          backgroundColor="#333"
          onPress={_handleEmailWebBrowser}
          style={styles.button}
        >
          Email
        </FontAwesome.Button>
        <FontAwesome.Button
          name="github"
          backgroundColor="#333"
          onPress={_handleGithubWebBrowser}
          style={styles.button}
        >
          Github
        </FontAwesome.Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff" // For debug
  },
  sources: {
    flex: 1,
    padding: 15,
    justifyContent: "space-around",
    backgroundColor: "#ecf0f1",
    margin: 10,
    borderRadius: 10
  },
  subtitle: {
    fontSize: 18
  },
  button: {
    textAlign: "center"
  }
});
