const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        currentUser:
          action.user.firstName +
          " " +
          action.user.lastName +
          " " +
          action.user.email
      };
    case "REGISTER_USER_ERROR":
      return { ...state, error: action.err };

    default:
      return state;
  }
};

export default userReducer;
