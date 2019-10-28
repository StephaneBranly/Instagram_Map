
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <Search></Search>
      <Text>L'application est enfin ouverte sur mon portable !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'rgba(0,255,0,1)',
    flex: 1,
  },
});
