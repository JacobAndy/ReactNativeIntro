import React, { Component } from "react";
import { Tabs } from "./router/route";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}

export default App;
