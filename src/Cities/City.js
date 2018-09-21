import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

import { colors } from "../theme";

export default class City extends React.Component {
  static navigationOptions = props => ({
    title: props.navigation.state.params.city.city,
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: "400"
    }
  });

  state = {
    name: "",
    info: ""
  };
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  addLocation = () => {
    if (this.state.name === "" || this.state.info === "") return;
    const { city } = this.props.navigation.state.params;
    const location = {
      name: this.state.name,
      info: this.state.info
    };
    this.props.screenProps.addLocation(location, city);
    this.setState({
      name: "",
      info: ""
    });
  };
  render() {
    return (
      <View>
        <TextInput
          value={this.state.name}
          placeholder="Location name"
          onChangeText={val => this.onChangeText("name", val)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          value={this.state.info}
          placeholder="Location name"
          onChangeText={val => this.onChangeText("info", val)}
          style={(styles.input, styles.input2)}
          placeholderTextColor="white"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Location</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
