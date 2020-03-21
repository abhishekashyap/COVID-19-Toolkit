import React from "react";
import { StyleSheet, View, Text } from "react-native";
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
        <FontAwesome.Button
          name="external-link"
          backgroundColor="#333"
          onPress={_handleOpenWHOWebBrowser}
          style={styles.buttonSources}
        >
          World Health Organization
        </FontAwesome.Button>
        <FontAwesome.Button
          name="external-link"
          backgroundColor="#333"
          onPress={_handleOpenMITWebBrowser}
          style={styles.buttonSources}
        >
          MIT Technology review
        </FontAwesome.Button>
      </View>
      <View style={styles.sources}>
        <Text style={[styles.subtitle, globalStyles.text]}>Contact:</Text>
        <FontAwesome.Button
          name="linkedin"
          backgroundColor="#333"
          onPress={_handleLinkedinWebBrowser}
          style={styles.buttonContacts}
        >
          LinkedIn
        </FontAwesome.Button>
        <FontAwesome.Button
          name="envelope-o"
          backgroundColor="#333"
          onPress={_handleEmailWebBrowser}
          style={styles.buttonContacts}
        >
          Email
        </FontAwesome.Button>
        <FontAwesome.Button
          name="github"
          backgroundColor="#333"
          onPress={_handleGithubWebBrowser}
          style={styles.buttonContacts}
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
    borderRadius: 10,
    alignItems: "center"
  },
  subtitle: {
    alignSelf: "flex-start",
    fontSize: 18
  },
  buttonSources: {
    width: 220
  },
  buttonContacts: {
    width: 100
  }
});
