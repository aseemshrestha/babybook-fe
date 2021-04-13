const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        token: action.credentials.token,
        username: action.credentials.username,
        fullName: action.credentials.fullName
      };

    default:
      return state;
  }
};

export default authReducer;
