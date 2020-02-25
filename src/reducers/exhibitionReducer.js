const initState = {
    filterSelected: 'current'
}

const exhibitionReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_EXHIBITION_FILTER":
            return {
                ...state,
                filterSelected: action.payload
            };

        default:
            return state
    }
}

export default exhibitionReducer