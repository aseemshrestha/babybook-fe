import axios from "axios";
import ApiService from "../../service/ApiService";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function fetchPosts(token) {
  return (dispatch) => {
    return ApiService.fetchPost(token).then((response) => {
      //console.log('response##', response.data);
      dispatch({ type: "FETCH_POSTS", posts: response.data });
    });
  };
}

