import React, { useState } from "react";
import { useRouter } from "expo-router";
import AppIntro from "../../components/AppIntro";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isNullOrWhiteSpace = (str) => {
    return !str || str.trim() === "";
  };

  const handleSignUp = async () => {
    try {
      const existingUserDataJson = await AsyncStorage.getItem("users");
      console.log(existingUserDataJson);
      let existingUserData = [];
      if (existingUserDataJson) {
        existingUserData = JSON.parse(existingUserDataJson);
      }

      const emailExists = existingUserData.some((user) => user.email === email);

      if (!isValidEmail(email)) {
        Alert.alert("Error", "Invalid Email");
        return;
      }

      if (emailExists) {
        Alert.alert("Error", "Email already exists");
        return;
      }

      if (isNullOrWhiteSpace(password)) {
        Alert.alert("Error", "Invalid password");
        return;
      }

      const newUser = {
        name: name,
        email: email,
        password: password,
      };

      const updatedUserData = [...existingUserData, newUser];
      await AsyncStorage.setItem("users", JSON.stringify(updatedUserData));

      Alert.alert("Success", "User signed up successfully");
      router.push("/Login");
    } catch (error) {
      console.error("Error:", error.message);
      Alert.alert("Error", "An error occurred while signing up");
    }
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
              router.back();
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
