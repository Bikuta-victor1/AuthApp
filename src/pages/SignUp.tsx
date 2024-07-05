import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import AppIntro from "../components/AppIntro";
import { signUpUser } from "../services/api_service";


const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, onChangePasswordConfirm] = useState('');
  const navigation = useNavigation();
  const [status, setStatus] = useState('');

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isNullOrWhiteSpace = (str: string): boolean => {
    return !str || str.trim() === "";
  };

  const handleSignUp = async () => {
    if (email.length <= 0) {
        Alert.alert('Please enter a username');
        return;
      }
  
      if (!isValidEmail(email)) {
        Alert.alert('Please enter a valid email');
        return;
      }
      if (password.length <= 0) {
        Alert.alert('Please enter a password');
        return;
      }
  
  
      setStatus('Registering ..');
  
      signUpUser(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          Alert.alert('Success, please login');
          navigation.goBack();
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
  
      return;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppIntro />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#dcdcdc"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor="#dcdcdc"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#dcdcdc"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", paddingTop: 5 }}>
          Already have an account?{" "}
          <Text
            style={styles.signupText}
            onPress={() => {
              navigation.goBack();
            }}
          >
            Sign in here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 30,
  },
  input: {
    height: 50,
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    width: "80%",
    fontSize: 16,
    color: "#ecf0f1",
    borderColor: "#ecf0f1",
  },
  button: {
    backgroundColor: "#e67e22",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  signupText: {
    color: "#3498db",
    marginTop: 10,
    textDecorationLine: "underline",
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUp;
