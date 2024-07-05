import React, {useState} from 'react';
import {
    signUp,
    signInAsync,
    fetchUser,
  } from '../services/api_service';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
// import { useRouter } from "expo-router";
import AppIntro from '../components/AppIntro';
import { useAppData } from '../providers/AppState';
// import AsyncStorage from "@react-native-async-storage/async-storage";



const Login = ({route, navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [status, setStatus] = useState('');
  const {setActiveUser} = useAppData();

  const navigateToSignup = () => {
    navigation.push("SignUp");
  };

  const handleSignIn = async () => {
    if (email.length <= 0) {
      Alert.alert('Please enter an email address');
      return;
    }
    if (password.length <= 0) {
      Alert.alert('Please enter a password');
      return;
    }



    setStatus('Authenticating ..');
    signInAsync(email, password)
      .then(userCred => {
        console.log('Login success!:', userCred.user.uid);
        loadUserProfile(userCred.user.uid);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
        Alert.alert(`${error}`);
      });
  };

  async function loadUserProfile(userID: string) {
    console.log('Loading user profile');
    setStatus('Loading user profile ..');
    const loadedUser = await fetchUser(userID);
    if (!loadedUser) {
      Alert.alert('Something went wrong');
      return;
    }
    setActiveUser(loadedUser);
    navigation.reset({
      index: 0,
      routes: [{name: 'AfterLogin'}],
    });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <AppIntro />
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor="#dcdcdc"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#dcdcdc"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        {/* <Text style={styles.forgotPasswordText} onPress={handleForgotPassword}>
          Forgot Password?
        </Text> */}

        <TouchableOpacity
          style={[
            styles.button,
            (email === '' || password === '') && styles.disabledButton,
          ]}
          disabled={email === '' || password === ''}
          onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', paddingTop: 5}}>
          New user?
          <Text style={styles.signupText} onPress={navigateToSignup}>
            {' '}
            Sign up here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 30,
  },

  input: {
    height: 50,
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    width: '80%',
    fontSize: 16,
    color: '#ecf0f1',
    borderColor: '#ecf0f1',
  },
  button: {
    backgroundColor: '#e67e22',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  signupText: {
    color: '#3498db',
    marginTop: 10,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#3498db',
    marginBottom: 10,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#EB984E',
  },
});

export default Login;
