import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class User extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          onPress={() => alert("AARON IS A BITCH")}
          color="blue"
          title="hello world"
        />
      </View>
    );
  }
}
