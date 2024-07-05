// NewPassword.js
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AppIntro from "../../components/AppIntro";

const NewPassword = ({ route }) => {
  const params = useLocalSearchParams();
  const { email } = params.email;
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    console.log("Changing password:", newPassword);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppIntro />
        <Text style={styles.title}>Create New Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          placeholderTextColor="#dcdcdc"
          secureTextEntry={true}
          onChangeText={(text) => setNewPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm new password"
          placeholderTextColor="#dcdcdc"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <TouchableOpacity
          style={[
            styles.button,
            (newPassword === "" || confirmPassword === "") &&
              styles.disabledButton,
          ]}
          disabled={newPassword === "" || confirmPassword === ""}
          onPress={handleChangePassword}
        >
          <Text style={styles.buttonText}>Change Password</Text>
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
  signupText: {
    color: "#3498db",
    marginTop: 10,
    textDecorationLine: "underline",
    fontSize: 16,
  },
  forgotPasswordText: {
    color: "#3498db",
    marginBottom: 10,
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
export default NewPassword;
