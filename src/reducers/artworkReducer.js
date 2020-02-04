const initState = {
    test: "I am an artwork found inside my reducer!",
    name: "",
    artist: "",
    medium: "",
    date: "",
    description: "",
    translationFr: ""
}

const artworkReducer = (state = initState, action) => {
    switch (action.type) {
        case "NAME":
            return {
                ...state,
                name: action.payload
            }
        case "ARTIST":
            return {
                ...state,
                artist: action.payload
            }
        case "MEDIUM":
            return {
                ...state,
                medium: action.payload
            }
        case "DATE":
            return {
                ...state,
                date: action.payload
            }
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