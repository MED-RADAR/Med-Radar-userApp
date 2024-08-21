import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const LocationSelect = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.selector}
      >
        <Text style={styles.selectorText}>
          {selectedLocation
            ? selectedLocation.description
            : "Location  📍"}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <GooglePlacesAutocomplete
              placeholder="Search for a location..."
              onPress={(data, details = null) => {
                // 'data' is the suggestion item from the API
                // 'details' is an optional parameter that includes more information about the place
                setSelectedLocation(data);
                setModalVisible(false);
              }}
              query={{
                key: "AIzaSyBmg6xFZOJvLn02RjM-t7SeLcrzX9WL1Ts",
                language: "en",
              }}
              styles={{
                textInputContainer: {
                  backgroundColor: "rgba(0,0,0,0)",
                  width: "100%",
                  borderWidth: 1,
                  borderRadius: 5,
                },
                textInput: {
                  color: "#5d5d5d",
                  fontSize: 16,
                },
                predefinedPlacesDescription: {
                  color: "#1faadb",
                },
              }}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // marginTop: 40,
    // width: '35%',
    // alignSelf: 'center'
  },
  selector: {
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectorText: {
    fontSize: 16,
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    minHeight: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    minHeight: 500,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  searchInput: {
    width: "100%",
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#f8f8f8",
    color: "#333",
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    width: "50%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LocationSelect;
