import { View, Text } from "react-native";
import React from "react";
import Location from "./Location";

const Header = () => {
  return (
    <View style={{ justifyContent: "center" , flexDirection: 'row', alignItems: 'center'}}>
      {/* <Search /> */}
      <Location />
    </View>
  );
};

export default Header;
