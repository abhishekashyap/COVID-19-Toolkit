import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <View style={styles.header}>
          <Text>COVID-19: Live map</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#2c3e50',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerCard: {
    backgroundColor: '#ecf0f1',
  },

});
