import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/HomeStack";

const getFonts = () =>
  Font.loadAsync({
    "circular-std": require("./assets/fonts/CircularStd-Medium.ttf"),
    "circular-std-book": require("./assets/fonts/CircularStd-Book.ttf")
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}