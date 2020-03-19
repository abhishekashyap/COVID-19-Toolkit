import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens import
import Home from "../screens/Home";
import Prevention from "../screens/Prevention";

const Stack = createStackNavigator();

export default Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Prevention" component={Prevention} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
