import React from 'react';
import Screen from '../components/screen';
import Logo from '../assets/images/logo.png';
import { Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '@ant-design/react-native';
import {SCREENS} from '../constants/screens';

const Home = ({navigation}) => {
  return (
    <Screen>
      <View style={styles.root}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.title}>Quiz Box</Text>
        <Button onPress={()=>navigation.navigate(SCREENS.QIZ_BOX_START_QUIZ_SCREEN)} style={styles.playNow}>
          <Text style={styles.playNowTitle}>Play Now</Text>
        </Button>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'arial',
    fontSize: 38,
    color: '#009a66',
    marginTop: 12,
  },
  logo: {
    height: 120,
    width: 120,
  },
  playNow: {
    border: 'none',
    color: 'white',
    marginTop: 80,
    minWidth: 155,
    backgroundColor: '#009a66',
  },
  playNowTitle: {color: 'white', fontSize: 18},
});

export default Home;
