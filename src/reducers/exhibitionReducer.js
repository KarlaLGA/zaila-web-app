const initState = {
    filterSelected: 'current',

    image: ""
}

const exhibitionReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_EXHIBITION_FILTER":
            return {
                ...state,
                filterSelected: action.payload
            };

        case "SET_IMAGE":
            return {
                ...state,
                image: action.payload
            }

        default:
            return state
    }
}

export default exhibitionReducer