import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewHeader from "../components/ViewHeader";
import ViewBody from "../components/FAQ";

export default function Myths() {
  const contentList = [
    {
      key: "1",
      question: "What is COVID-19?",
      answer:
        "COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019."
    },
    {
      key: "2",
      question: "How does COVID-19 spread?",
      answer:
        "People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth."
    },
    {
      key: "3",
      question:
        "Are antibiotics effective in preventing or treating the COVID-19?",
      answer:
        "No. Antibiotics do not work against viruses, they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. They should only be used as directed by a physician to treat a bacterial infection."
    },
    {
      key: "4",
      question: "Is there a vaccine, drug or treatment for COVID-19?",
      answer:
        "Not yet. To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019. However, those affected should receive care to relieve symptoms. People with serious illness should be hospitalized. Most patients recover thanks to supportive care."
    },
    {
      key: "5",
      question: "How long does the virus survive on surfaces?",
      answer:
        "It is not certain how long the virus that causes COVID-19 survives on surfaces, but it seems to behave like other coronaviruses. Studies suggest that coronaviruses (including preliminary information on the COVID-19 virus) may persist on surfaces for a few hours or up to several days. This may vary under different conditions (e.g. type of surface, temperature or humidity of the environment)."
    },
    {
      key: "6",
      question: "How long is the incubation period for COVID-19?",
      answer:
        "The “incubation period” means the time between catching the virus and beginning to have symptoms of the disease. Most estimates of the incubation period for COVID-19 range from 1-14 days, most commonly around five days. These estimates will be updated as more data become available."
    }
  ];
  return (
    <View style={styles.container}>
      <ViewHeader
        title="FAQ"
        color="#B53471"
        subtitle="Frequently asked questions"
      />
      <ViewBody
        contentList={contentList}
        listIcon="md-checkmark-circle"
        listIconColor="green"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff" // For debug
  }
});
