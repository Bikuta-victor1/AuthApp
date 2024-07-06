import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { User } from "../common/types";
import { useAppData } from "../providers/AppState";
import { fetchUser } from "../services/api_service";
// import AsyncStorage from "@react-native-async-storage/async-storage";


const Profile=({route,navigation}) => {

//     async function loadUserProfile(userID: string) {
//         console.log('Loading user profile');
//         setStatus('Loading user profile ..');
//         const loadedUser = await fetchUser(userID);
//         if (!loadedUser) {
//           Alert.alert('Something went wrong');
//           return;
//         }
//         setActiveUser(loadedUser);
//         navigation.reset({
//           index: 0,
//           routes: [{name: 'AfterLogin'}],
//         });
//       }

//   useEffect(() => {
//     loadUserProfile(activeUser.id);
//   }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/image_11.jpg")}
        style={styles.profileImage}
      />
      <Text style={styles.name}>{ "${activeUser.firstName} ${activeUser.lastName}" }</Text>
      <View style={styles.aboutContainer}>
        <Text style={styles.contactLabel}>About </Text>
        <Text style={styles.about}>
          Embracing the journey of productivity and personal growth one task at
          a time. With a blend of ambition and determination, I'm committed to
          tackling my to-do list and achieving my aspirations. From small
          victories to big dreams, every step forward counts. Let's make each
          day count and strive for progress together!
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactLabel}>Phone Number: </Text>
        <Text>+1234567890</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactLabel}>Email: </Text>
        <Text>adekola@gmail.com</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactLabel}>Location: </Text>
        <Text>Barrie</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  profileRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  status: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  aboutContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  about: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    justifyContent: "flex-start",
  },
  divider: {
    height: 1,
    backgroundColor: "black",
    width: "80%",
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
  },
  contactLabel: {
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default Profile;
