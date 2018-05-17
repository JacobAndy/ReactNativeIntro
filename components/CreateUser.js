import React, { Component } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { createUser } from "../Ducks/userReducer";
import { connect } from "react-redux";

const image =
  "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?cs=srgb&dl=evening-lake-lake-mcdonald-326058.jpg&fm=jpg";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userNameRegex = new RegExp("^[a-z0-9_-]{3,15}$");

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      userNameError: false,
      emailError: false,
      firstNameError: false,
      lastNameError: false,
      phoneNumberError: false,
      passwordError: false
    };
  }
  createUserHandle() {
    let {
      userName,
      email,
      firstName,
      lastName,
      phoneNumber,
      password
    } = this.state;
    if (userName.match(userNameRegex) === null) {
      this.setState({ userNameError: true });
    } else {
      this.setState({ userNameError: false });
    }
    if (!email || email.match(emailRegex) === null) {
      this.setState({ emailError: true });
    } else {
      this.setState({ emailError: false });
    }
    if (!firstName || firstName.match(/^[a-zA-Z]+$/) === null) {
      this.setState({ firstNameError: true });
    } else {
      this.setState({ firstNameError: false });
    }
    if (!lastName || lastName.match(/^[a-zA-Z]+$/) === null) {
      this.setState({ lastNameError: true });
    } else {
      this.setState({ lastNameError: false });
    }
    if (phoneNumber < 10 || phoneNumber.match(/^[0-9]*$/) === null) {
      this.setState({ phoneNumberError: true });
    } else {
      this.setState({ phoneNumberError: false });
    }
    if (password.match(passwordRegex) === null) {
      this.setState({ passwordError: true });
    } else {
      this.setState({ passwordError: false });
    }
    this.props.createUser(
      userName,
      email,
      firstName,
      lastName,
      phoneNumber,
      password
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#333",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: -1
          }}
          source={{ uri: image }}
        />
        <View
          style={{
            backgroundColor: "#42A5F5",
            borderRadius: 10,
            width: "95%",
            height: 450,
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: 10,
              width: "90%",
              height: "77%",
              backgroundColor: "#1E88E5",
              paddingTop: 15,
              paddingBottom: 15
            }}
          >
            <TextInput
              returnKeyType="done"
              keyboardAppearance="dark"
              placeholder="User Name"
              underlineColorAndroid="#BBDEFB"
              selectionColor="blue"
              placeholderTextColor={
                !this.state.userNameError ? "#BBDEFB" : "#EF9A9A"
              }
              style={
                !this.state.passwordError
                  ? {
                      backgroundColor: "#64B5F6",
                      borderRadius: 3,
                      paddingLeft: 10,
                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
                  : {
                      backgroundColor: "rgba(198,40,40,.8)",
                      borderRadius: 3,
                      paddingLeft: 10,
                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
              }
              onChangeText={text => this.setState({ userName: text })}
            />
            <TextInput
              returnKeyType="done"
              keyboardAppearance="dark"
              placeholder="Email"
              underlineColorAndroid="#BBDEFB"
              selectionColor="blue"
              placeholderTextColor={
                !this.state.emailError ? "#BBDEFB" : "#EF9A9A"
              }
              style={
                !this.state.passwordError
                  ? {
                      backgroundColor: "#64B5F6",
                      borderRadius: 3,
                      paddingLeft: 10,
                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
                  : {
                      backgroundColor: "rgba(198,40,40,.8)",
                      borderRadius: 3,
                      paddingLeft: 10,
                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
              }
              onChangeText={text => this.setState({ email: text })}
            />
            <TextInput
              returnKeyType="done"
              keyboardAppearance="dark"
              placeholder="First Name"
              underlineColorAndroid="#BBDEFB"
              selectionColor="blue"
              placeholderTextColor={
                !this.state.firstNameError ? "#BBDEFB" : "#EF9A9A"
              }
              style={
                !this.state.passwordError
                  ? {
                      backgroundColor: "#64B5F6",
                      borderRadius: 3,
                      paddingLeft: 10,

                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
                  : {
                      backgroundColor: "rgba(198,40,40,.8)",
                      borderRadius: 3,
                      paddingLeft: 10,
                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
              }
              onChangeText={text => this.setState({ firstName: text })}
            />
            <TextInput
              returnKeyType="done"
              keyboardAppearance="dark"
              placeholder="Last Name"
              underlineColorAndroid="#BBDEFB"
              selectionColor="blue"
              placeholderTextColor={
                !this.state.lastNameError ? "#BBDEFB" : "#EF9A9A"
              }
              style={
                !this.state.passwordError
                  ? {
                      backgroundColor: "#64B5F6",
                      borderRadius: 3,
                      paddingLeft: 10,
                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
                  : {
                      backgroundColor: "rgba(198,40,40,.8)",
                      borderRadius: 3,
                      paddingLeft: 10,
                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
              }
              onChangeText={text => this.setState({ lastName: text })}
            />
            <TextInput
              returnKeyType="done"
              keyboardAppearance="dark"
              keyboardType="number-pad"
              underlineColorAndroid="#BBDEFB"
              maxLength={10}
              selectionColor="blue"
              placeholder="Phone Number"
              placeholderTextColor={
                !this.state.phoneNumberError ? "#BBDEFB" : "#EF9A9A"
              }
              style={
                !this.state.passwordError
                  ? {
                      backgroundColor: "#64B5F6",
                      borderRadius: 3,
                      paddingLeft: 10,
                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
                  : {
                      backgroundColor: "rgba(198,40,40,.8)",
                      borderRadius: 3,
                      paddingLeft: 10,
                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
              }
              onChangeText={text => this.setState({ phoneNumber: text })}
            />
            <TextInput
              returnKeyType="done"
              keyboardAppearance="dark"
              placeholder="Password"
              underlineColorAndroid="#BBDEFB"
              selectionColor="blue"
              secureTextEntry={true}
              placeholderTextColor={
                !this.state.passwordError ? "#BBDEFB" : "#EF9A9A"
              }
              style={
                !this.state.passwordError
                  ? {
                      backgroundColor: "#64B5F6",
                      borderRadius: 3,
                      paddingLeft: 10,
                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
                  : {
                      backgroundColor: "rgba(198,40,40,.8)",
                      borderRadius: 3,
                      paddingLeft: 10,
                      width: "90%",
                      height: 35,
                      fontSize: 20
                    }
              }
              onChangeText={text => this.setState({ password: text })}
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
              title="SIGN UP"
              onPress={() => {
                this.createUserHandle();
                this.props.navigation.goBack();
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

let mapStateToProps = state => state;
export default connect(mapStateToProps, { createUser })(CreateUser);
