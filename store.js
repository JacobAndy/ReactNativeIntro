import promisemiddleware from "redux-promise-middleware";
import { createStore, combineReducers, applyMiddleware } from "redux";
import user from "./Ducks/user";

const store = createStore(
  combineReducers({ user }),
  applyMiddleware(promisemiddleware())
);
export default store;
