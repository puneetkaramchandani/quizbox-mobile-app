import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Loader from './loader';

const Screen = ({children}) => {
  const {isLoading} = useSelector(state => state.common);

  return (
    <SafeAreaView style={styles.root}>
      {isLoading && <Loader />}
      {!isLoading && children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
    padding:12
  },
});

export default Screen;
