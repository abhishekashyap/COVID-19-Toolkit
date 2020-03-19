import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Menu from '../components/Menu';

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
    backgroundColor: '#fff', // For debug
  },

});
