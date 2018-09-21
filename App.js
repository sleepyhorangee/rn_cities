import React from "react";
import { Platform, StyleSheet, Text, View, AsyncStorage } from "react-native";

import Tabs from "./src";
const key = "cities";

export default class App extends React.Component {
  state = {
    cities: []
  };
  async componentDidMount() {
    try {
      const cities = await AsyncStorage.getItem(key);
      this.setState({
        cities: JSON.parse(cities)
      });
    } catch (e) {
      console.log("e: ", e);
    }
  }
  addCity = city => {
    const cities = this.state.cities;
    cities.push(city);
    AsyncStorage.setItem(key, JSON.stringify(cities))
      .then(() => console.log("item stored"))
      .catch(err => {
        console.log("error: ", err);
      });
    this.setState({ cities });
  };
  addLocation = () => {};
  render() {
    return (
      <Tabs
        screenProps={{
          cities: this.state.cities,
          addCity: this.addCity
        }}
      />
    );
  }
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
