import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Autocomplete from "react-native-autocomplete-input";

const HospitalSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState([]);

  // Sample data for hospitals
  const hospitals = [
    { id: "1", name: "City Hospital" },
    { id: "2", name: "General Hospital" },
    { id: "3", name: "Central Hospital" },
    { id: "4", name: "Community Hospital" },
    { id: "5", name: "Specialty Hospital" },
    // Add more hospital names as needed
  ];

  const searchHospitals = (text) => {
    setSearchText(text);

    // Only filter if there is input
    if (text.length === 0) {
      setFilteredHospitals([]);
    } else {
      const filtered = hospitals.filter((hospital) =>
        hospital.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredHospitals(filtered);
    }
  };

  const handleSelectItem = (item) => {
    setSearchText(item.name);
    setFilteredHospitals([]); // Clear the list after selection
  };

  const renderAutocompleteItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectItem(item)}>
      <View style={styles.hospitalItem}>
        <Text style={styles.hospitalName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Autocomplete
        data={filteredHospitals}
        value={searchText}
        onChangeText={(text) => searchHospitals(text)}
        renderItem={renderAutocompleteItem}
        containerStyle={styles.autocompleteContainer}
        inputContainerStyle={styles.autocompleteInputContainer}
        listContainerStyle={styles.autocompleteListContainer}
        renderTextInput={(props) => (
          <TextInput
            {...props}
            style={styles.autocompleteInput}
            placeholder="Search for a hospital..."
            placeholderTextColor="#888888"
          />
        )}
        flatListProps={{
          keyExtractor: (item) => item.id,
          renderItem: renderAutocompleteItem,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  autocompleteContainer: {
    flex: 1,
    zIndex: 1, // Ensure it overlays other content
  },
  autocompleteInputContainer: {
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  autocompleteListContainer: {
    borderWidth: 0,
    marginTop: 5,
    borderRadius: 10,
    overflow: 'hidden', // Ensures border radius is applied to list items
  },
  autocompleteInput: {
    fontSize: 18,
    padding: 10,
    color: '#333333',
  },
  hospitalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d1d1d1",
    backgroundColor: '#ffffff',
  },
  hospitalName: {
    fontSize: 16,
    color: "#333333",
  },
});

export default HospitalSearch;
