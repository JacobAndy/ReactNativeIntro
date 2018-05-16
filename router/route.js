import React from "react";
import { createBottomTabNavigator } from "react-navigation";
// import { Icon } from "react-native-elements";
import User from "./User";
import Characters from "./Characters";

export const Tabs = createBottomTabNavigator({
  User: User,
  WOO: Characters
});
