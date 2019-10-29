import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Search from './src/components/Search';
import Render_search from './src/components/Render_search';

export default function App() {
  return (
    <View style={styles.container}>
      <Search></Search>
      <Render_search></Render_search>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(220,200,20,1)',
    flex: 1,
  },
});
