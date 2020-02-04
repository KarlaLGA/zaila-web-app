const initState = {
    test: "I am an artwork found inside my reducer!",
    description: "",
    translationFr: ""
}

const artworkReducer = (state = initState, action) => {
    switch (action.type) {
        case "DESCRIPTION":
            return {
                ...state,
                description: action.payload
            }
        case "TRANS_FR":
            return {
                ...state,
                translationFr: action.payload
            }
        default:
            return state
    }
}

export default artworkReducer