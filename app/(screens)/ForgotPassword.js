// ForgotPassword.js
import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AppIntro from "../../components/AppIntro";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSendOTP = () => {
    if (email !== "") {
      router.push({
        pathname: "/OTPVerification",
        params: { email: email },
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppIntro />
        <Text style={styles.title}>Forgot Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#dcdcdc"
          onChangeText={(text) => setEmail(text)}
        />

        <TouchableOpacity
          style={[styles.button, email === "" && styles.disabledButton]}
          disabled={email === ""}
          onPress={handleSendOTP}
        >
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Text style={styles.goBackText}>Go back to Sign In</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
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
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  goBackText: {
    color: "#3498db",
    marginTop: 20,
    textDecorationLine: "underline",
  },
  disabledButton: {
    backgroundColor: "#EB984E",
  },
});

export default ForgotPassword;
