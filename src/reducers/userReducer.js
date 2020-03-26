const initState = {
  userLogged: false,

  navBar: false,

  burgerMenu: false
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

    case "BURGER": {
      return {
        ...state,
        burgerMenu: !state.burgerMenu
      };
    }

    case "CLOSE_BURGER": {
      return {
        ...state,
        burgerMenu: true
      };
    }

    default:
      return state;
  }
};

export default userReducer;
