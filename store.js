import promisemiddleware from "redux-promise-middleware";
import { createStore, combineReducers, applyMiddleware } from "redux";

const store = createStore(
  //   combineReducers(),
  applyMiddleware(promisemiddleware())
);
export default store;
