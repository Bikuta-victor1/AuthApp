import React, { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AppIntro from "../../components/AppIntro";

const OTPVerification = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [otp, setOtp] = useState("");

  const handleVerifyOTP = () => {
    router.push({
      pathname: "/NewPassword",
      params: { email: params.email },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppIntro />
        <Text style={styles.title}>Verify OTP</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#dcdcdc"
          onChangeText={(text) => setOtp(text)}
        />

        <TouchableOpacity
          style={[styles.button, otp === "" && styles.disabledButton]}
          disabled={otp === ""}
          onPress={handleVerifyOTP}
        >
          <Text style={styles.buttonText}>Verify OTP</Text>
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
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#3498db",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#EB984E",
  },
});
export default OTPVerification;
