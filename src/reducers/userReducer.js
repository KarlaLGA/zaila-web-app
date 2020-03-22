const initState = {
  userLogged: false
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_LOG_IN":
      return {
        ...state,
        userLogged: true
      };

    case "USER_LOG_OUT":
      return {
        ...state,
        userLogged: false
      };

    default:
      return state;
  }
};

export default userReducer;
