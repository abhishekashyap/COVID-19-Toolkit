import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Menu from './components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf: 'stretch',
    backgroundColor: '#e67e22', // For debug
  },

});
