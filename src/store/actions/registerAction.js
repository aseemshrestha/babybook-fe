import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
let headerWithoutLogin = {
  "Access-Control-Allow-Origin": "POST"
};
export default function registerUser(user) {
  return dispatch => {
    return axios
      .post(`${BASE_URL}/api/v1/public/create-user`, user, {
        headers: headerWithoutLogin
      })
      .then(() => {
        dispatch({ type: "REGISTER_USER", user: user });
      });
  };
}


