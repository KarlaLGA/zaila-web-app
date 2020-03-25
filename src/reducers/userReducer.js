const initState = {
  userLogged: false,

  navBar: false
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

    case "CHANGE_NAVBAR_STATE":
      let currentNav = state.navBar;
      return {
        ...state,
        navBar: !currentNav
      };

    default:
      return state;
  }
};

export default userReducer;
