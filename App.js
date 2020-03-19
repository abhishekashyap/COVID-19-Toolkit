import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Home from "./screens/Home";

const getFonts = () =>
  Font.loadAsync({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-light": require("./assets/fonts/Nunito-Light.ttf")
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
