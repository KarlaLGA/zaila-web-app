const initState = {
    selectedArtwork: {},

    image: {},

    artworkDetails: [],
    description: "",
    translationFr: "",
    translationEs: "",
    translationCh: "",

    artworkList: []
}

const artworkReducer = (state = initState, action) => {
    switch (action.type) {


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

        case "SET_ARTWORK_DETAILS":
            return {
                ...state,
                artworkDetails: action.payload
            }

        case "SET_DESCRIPTION":
            return {
                ...state,
                artworkDetails: [
                    {description: action.payload,
                    languageCode: "en-US"}
                ]
            }

        case "SET_TRANS_FR":
            return {
                ...state,
                artworkDetails: [
                    ...state.artworkDetails,
                    {description: action.payload,
                    languageCode: "fr-CA"}
                ]
            }

        case "SET_TRANS_ES":
            return {
                ...state,
                artworkDetails: [
                    ...state.artworkDetails,
                    {description: action.payload,
                    languageCode: "es-ES"}
                ]
            }

        case "SET_TRANS_ZH":
            return {
                ...state,
                artworkDetails: [
                    ...state.artworkDetails,
                    {description: action.payload,
                    languageCode: "zh-CN"}
                ]
            }

        case "SET_ARTWORK_LIST":
            return {
                ...state,
                artworkList: action.payload
            }

        case "SET_SELECTED_ARTWORK":
            return {
                ...state,
                selectedArtwork: action.payload
            }

        case "EMPTY_ARTWORK_DETAILS":
            return {
                ...state,
                artworkDetails: []
            }

        default:
            return state
    }
}

export default artworkReducer