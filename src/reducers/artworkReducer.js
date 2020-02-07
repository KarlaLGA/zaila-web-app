const initState = {
    newArtwork: {},

    selectedArtwork: {},

    image: {},
    description: "",
    translationFr: "",
    translationEs: "",
    translationCh: "",

    artworkList: []
}

const artworkReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_NEW_ARTWORK":
            return {
                ...state,
                newArtwork: action.payload
            }

        case "SET_IMAGE":
            return {
                ...state,
                image: action.payload
            }

        case "SET_SELECTED_LANGUAGE":
            return {
                ...state,
                selectedArtwork: action.payload
            }

        case "SET_DESCRIPTION":
            return {
                ...state,
                description: action.payload
            }

        case "SET_TRANS_FR":
            return {
                ...state,
                translationFr: action.payload
            }

        case "SET_TRANS_ES":
            return {
                ...state,
                translationEs: action.payload
            }

        case "SET_TRANS_CH":
            return {
                ...state,
                translationCh: action.payload
            }

        default:
            return state
    }
}

export default artworkReducer