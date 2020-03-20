import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";

// Screens import
import Home from "../screens/Home";
import Prevention from "../screens/Prevention";

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
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Prevention" component={Prevention} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
