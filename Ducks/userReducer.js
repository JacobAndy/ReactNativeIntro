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
    case `${CREATE_USER}_PENDING`:
    case `${LOG_IN_USER}_FULFILLED`:

    default:
      return { ...state };
  }
}

//action creators
export function createUser(
  userName,
  email,
  firstName,
  lastName,
  phoneNumber,
  password
) {
  return {
    type: CREATE_USER,
    payload: axios.post("http://localhost:3001/api/user/create", {
      userName,
      email,
      firstName,
      lastName,
      phoneNumber,
      password
    })
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
