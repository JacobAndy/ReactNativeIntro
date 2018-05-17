import promisemiddleware from "redux-promise-middleware";
import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./Ducks/userReducer";

const store = createStore(
  combineReducers({ userReducer }),
  applyMiddleware(promisemiddleware())
);
export default store;
