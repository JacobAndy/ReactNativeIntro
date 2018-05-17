import React from "react";
// import { createBottomTabNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation";

// import { Icon } from "react-native-elements";
import User from "./UserLogin";
import CreateUser from "./CreateUser";
// import Characters from "../components/Characters";

export const Tabs = createStackNavigator({
  User: User,
  CreateUser: CreateUser
});
