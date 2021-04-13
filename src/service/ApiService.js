import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

class ApiService {
  registerBaby(data, headerToken) {
    return axios.post(`${BASE_URL}/api/v1/secured/submit-baby-details`, data, {
      headers: headerToken,
    });
  }
  fetchBabyInfo(data, headerToken) {
    return axios.get(
      `${BASE_URL}/api/v1/secured/get-baby-by-username/${data}`,{
        headers: headerToken,
      }
    );
  }

  submitPost(formData, token, options) {
    return axios.post(`${BASE_URL}/api/v1/secured/submit-post`, formData, {
      headers: {
        Authorization: token,
      },
      options,
    });
  }
  fetchPost(token) {
    return axios.get(`${BASE_URL}/api/v1/secured/fetch-post`, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new ApiService();
