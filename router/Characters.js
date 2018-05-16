import React from "react";
import {
  Geolocation,
  TextInput,
  AlertIOS,
  DatePickerIOS,
  StyleSheet,
  Text,
  View
} from "react-native";
import axios from "axios";
// import UserDetails from "./components/UserDetails";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       console.log(position.coords.latitude);
  //       console.log(position.coords.longitude);
  //     },
  //     err => alert(err),
  //     { timeout: 60000, enableHighAccuracy: true, maximumAge: 60000 }
  //   );
  // }
  componentDidMount() {
    axios
      .get("https://swapi.co/api/people/")
      .then(results => {
        console.log(results.data.results);
        this.setState({ people: results.data.results });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    let characters = this.state.people.map((e, i) => {
      return (
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#999",
            marginTop: 1,
            marginBottom: 1
          }}
          key={i}
        >
          <Text style={{ color: "white" }}>{e.name}</Text>
        </View>
      );
    });
    return (
      <View
        style={{
          backgroundColor: "black",
          opacity: 0.7,
          marginTop: 70,
          marginBottom: 40,
          flex: 1,
          justifyContent: "center"
        }}
      >
        {characters}
        {/* <Text>Hello BOB</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
