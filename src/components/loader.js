import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.root}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'gray',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
