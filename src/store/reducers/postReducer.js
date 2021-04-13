const initState = {};

const postReducer = (state = initState, action) => {
 console.log('action', action.type);
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        postData: action.posts,
      };
    case "FETCH_POSTS_ERROR":
      return { ...state, error: action.err };

    default:
      return state;
  }
};

export default postReducer;
