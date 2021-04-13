import authReducer from "./authReducer";
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";


const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer
});

export default rootReducer;
