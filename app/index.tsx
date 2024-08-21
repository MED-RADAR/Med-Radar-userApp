import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/mainPage.png")}
        style={{
          width: "100%",
          height: 500,
        }}
      />
      <View style={styles.container}>
        <Image
          source={require("../assets/images/medradarLogo 1.png")}
          style={{
            // width: "100%",
            // height: 500,
            marginBottom: 50,
            alignSelf: "center"
          }}
        />
        <Text
          style={{
            // fontFamily: "outfit",
            fontSize: 20,
            textAlign: "center",
            color: "gray",
            marginTop: 20,
          }}
        >
         Finding the right hospital should be quick, easy, and stress-free, ensuring you can access care without any hassle. Your health deserves a smooth and straightforward process.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/hospitals")}
        >
          <Text
            style={{
              color: "#fff",
            //   fontFamily: "outfit",
              fontSize: 17,
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: "#000",
    borderRadius: 99,
    marginTop: "25%",
  },
});
