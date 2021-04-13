import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
let headerWithoutLogin = {
  "Access-Control-Allow-Origin": "POST"
};
export default function logIn(credentials) {
 // console.dir(credentials);
  delete credentials.message;
  delete credentials.email;
  delete credentials.confirmPassword;
  delete credentials.resetCode;

  console.dir("credentials" + credentials);
  console.log(BASE_URL);

  return dispatch => {
    return axios
      .post(`${BASE_URL}/login`, credentials, {
        headers: headerWithoutLogin
      })
      .then((response) => {
        delete credentials.password;
        credentials.token = response.headers.authorization;
        credentials.fullName = response.headers.fullname;
      
        dispatch({ type: "LOGIN_USER", credentials: credentials });
      });
  };
}
