import React, { Component } from "react";
import { View, Text, Button, TextInput, Image } from "react-native";
import { connect } from "react-redux";
import { logUserIn, createUser } from "../Ducks/user";

const remote =
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

class User extends Component {
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      passwordInput: ""
    };
  }
  handleLoginUser() {
    let { userNameInput, passwordInput } = this.state;
    this.props.logUserIn(userNameInput, passwordInput);
    console.log("LOG IN USER HANDLE HIT");
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#333"
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: -1,
            opacity: 0.6
          }}
          source={{ uri: remote }}
        />
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: 10,
            width: "95%",
            height: 450,
            backgroundColor: "#42A5F5",
            padding: 20
          }}
        >
          <View
            style={{
              height: "40%",
              width: "99%",
              borderRadius: 5,
              justifyContent: "space-around",
              paddingTop: 5,
              paddingBottom: 5,
              alignItems: "center",
              backgroundColor: "#1E88E5"
            }}
          >
            <TextInput
              style={{
                backgroundColor: "#1976D2",

                width: "90%",
                height: 50,
                fontSize: 30
              }}
              placeholder="User Name"
              placeholderTextColor="#BBDEFB"
              onChangeText={text => {
                this.setState({ userNameInput: text });
              }}
            />
            <TextInput
              secureTextEntry={true}
              style={{
                backgroundColor: "#1976D2",
                width: "90%",
                height: 50,
                fontSize: 30
              }}
              placeholder="Password"
              placeholderTextColor="#BBDEFB"
              onChangeText={text => {
                this.setState({ passwordInput: text });
              }}
            />
          </View>
          <View
            style={{
              width: "80%",

              height: "11%",
              justifyContent: "center",
              backgroundColor: "#BBDEFB",
              borderRadius: 10
            }}
          >
            <Button
              color="#1565C0"
              title="LOG IN"
              onPress={() => this.handleLoginUser()}
            />
          </View>
          <Text style={{ position: "absolute", bottom: 10, fontSize: 12 }}>
            New User? Create an account!
          </Text>
        </View>
      </View>
    );
  }
}

let mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps, { logUserIn, createUser })(User);
