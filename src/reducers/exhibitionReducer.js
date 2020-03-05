const initState = {
  filterSelected: "current",

  image: "",

  exhibitionList: [],

  categories: []
};

const exhibitionReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_EXHIBITION_FILTER":
      return {
        ...state,
        filterSelected: action.payload
      };

    case "SET_IMAGE_EXHIBITION":
      return {
        ...state,
        image: action.payload
      };

    case "SET_EXHIBITIONS":
      return {
        ...state,
        exhibitionList: action.payload
      };

    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload
      };

    default:
      return state;
  }
};

export default exhibitionReducer;
