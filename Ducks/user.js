import axios from "axios";

//initial state
const initialState = {
  user: ""
};

//constants
const LOG_IN_USER = "LOG_IN_USER";
const CREATE_USER = "CREATE_USER";

//reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}

//action creators
export function createUser() {
  return {
    type: CREATE_USER,
    payload: axios.post("/api/user/create")
  };
}
export function logUserIn(user, pass) {
  console.log(user, pass);
  return {
    type: LOG_IN_USER,
    payload: axios.get(
      `http://localhost:3001/api/user/login?user=${user}&password=${pass}`
    )
  };
}
