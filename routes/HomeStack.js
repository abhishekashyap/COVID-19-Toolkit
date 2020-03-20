import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";

// Screens import
import Home from "../screens/Home";
import Prevention from "../screens/Prevention";
import Symptoms from "../screens/Symptoms";
import HowItSpreads from "../screens/HowItSpreads";
import Treatment from "../screens/Treatment";
import WorldMap from "../screens/WorldMap";
import About from "../screens/About";

const Stack = createStackNavigator();

export default Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS
        }}
        mode="modal"
        headerMode="none"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Prevention" component={Prevention} />
        <Stack.Screen name="Symptoms" component={Symptoms} />
        <Stack.Screen name="Treatment" component={Treatment} />
        <Stack.Screen name="HowItSpreads" component={HowItSpreads} />
        <Stack.Screen name="WorldMap" component={WorldMap} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
