import { View, Text, Image, StyleSheet } from "react-native";
import React from 'react'
import HospitalSearch from '../components/HospitalSearch'

const hospitals = () => {
  return (
    <View style={styles.container}>
     <HospitalSearch/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
    //   marginTop: -20,
      height: "100%",
    //   borderTopLeftRadius: 20,
    //   borderTopRightRadius: 20,
    //   padding: 25,
    },
    button: {
      padding: 15,
      backgroundColor: "#000",
      borderRadius: 99,
      marginTop: "25%",
    },
  });
  
export default hospitals