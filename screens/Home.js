import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";

// Global stylesheet import
import { globalStyles } from "../styles/global";

// Icon imports
import Prevention from "../assets/icons/prevention.png";
import Symptom from "../assets/icons/symptom.png";
import MythBusters from "../assets/icons/agreement.png";
import Treatment from "../assets/icons/hospital.png";
import FAQ from "../assets/icons/question.png";
import WorldMap from "../assets/icons/world.png";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title="COVID-19" subtitle="Essential Toolkit" />
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("Prevention")}>
            <View style={[styles.menuItem, styles.menuItem1]}>
              <Image source={Prevention} style={styles.icon} />
              <Text style={[styles.itemTitle, globalStyles.text]}>
                Prevention
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Symptoms")}>
            <View style={[styles.menuItem, styles.menuItem2]}>
              <Image source={Symptom} style={styles.icon} />
              <Text style={[styles.itemTitle, globalStyles.text]}>
                Symptoms
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Treatment")}>
            <View style={[styles.menuItem, styles.menuItem3]}>
              <Image source={Treatment} style={styles.icon} />
              <Text style={[styles.itemTitle, globalStyles.text]}>
                Treatment
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MythBusters")}>
            <View style={[styles.menuItem, styles.menuItem4]}>
              <Image source={MythBusters} style={styles.icon} />
              <Text style={[styles.itemTitle, globalStyles.text]}>
                Myth busters
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("FAQ")}>
            <View style={[styles.menuItem, styles.menuItem5]}>
              <Image source={FAQ} style={styles.icon} />
              <Text style={[styles.itemTitle, globalStyles.text]}>FAQ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("WorldMap")}>
            <View style={[styles.menuItem, styles.menuItem6]}>
              <Image source={WorldMap} style={styles.icon} />
              <Text style={[styles.itemTitle, globalStyles.text]}>
                World Map
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <View style={styles.about}>
              <Text style={[styles.aboutText, globalStyles.text]}>About</Text>
              <Ionicons
                name="ios-information-circle-outline"
                style={styles.aboutIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 80,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10
  },
  itemTitle: {
    fontSize: 25,
    paddingLeft: 15,
    color: "#fff"
  },
  icon: {
    height: 50,
    width: 50
  },
  menuItem1: {
    backgroundColor: "#1ABC9C"
  },
  menuItem2: {
    backgroundColor: "#D54E4E"
  },
  menuItem3: {
    backgroundColor: "#34495E"
  },
  menuItem4: {
    backgroundColor: "#9B59B6"
  },
  menuItem5: {
    backgroundColor: "#B53471"
  },
  menuItem6: {
    backgroundColor: "#2ECC71"
  },
  about: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  aboutText: {
    fontSize: 15
  },
  aboutIcon: {
    color: "#333",
    marginLeft: 5
  }
});
