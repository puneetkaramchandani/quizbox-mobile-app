import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.root}></SafeAreaView>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
