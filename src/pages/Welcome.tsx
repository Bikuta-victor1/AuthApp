import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Welcome = ({route, navigation}) => {
  const navigateToLogin = () => {
    navigation.push('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/welcome2.png')} />
      </View>
      <TouchableOpacity onPress={navigateToLogin} style={styles.arrowContainer}>
        <AntDesign style={styles.arrowRight} name="arrowright" />
      </TouchableOpacity>
      <View>
        <View style={styles.logoAndText}>
          <Text style={styles.appText}>Never been easier</Text>
        </View>
        <Text style={styles.introText}>Add, edit todos with one tap</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Entypo name="dot-single" style={styles.bulletInActiveIcon} />
        <Entypo name="dot-single" style={styles.bulletIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C77726',
  },
  arrowContainer: {
    borderRadius: 20,
    backgroundColor: 'white',
  },
  arrowRight: {
    fontSize: 24,
    padding: 10,
    color: 'black',
  },
  imageContainer: {
    flexDirection: 'column',
    width: '100%',
    height: '60%',
    justifyContent: 'center',
  },
  logoAndText: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  appText: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
  },
  introText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 15,
  },
  bulletContainer: {
    paddingTop: 5,
    flexDirection: 'row',
  },
  bulletInActiveIcon: {
    fontSize: 30,
    color: 'white',
  },
  bulletIcon: {
    fontSize: 30,
    color: 'black',
  },
});

export default Welcome;
