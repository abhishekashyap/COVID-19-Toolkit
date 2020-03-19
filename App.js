import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Home from "./screens/Home";

const getFonts = () =>
  Font.loadAsync({
    "circular-std": require("./assets/fonts/CircularStd-Medium.ttf"),
    "circular-std-book": require("./assets/fonts/CircularStd-Book.ttf"),
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
