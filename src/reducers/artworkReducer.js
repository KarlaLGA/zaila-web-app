const initState = {
    test: "I am an artwork found inside my reducer!",
    name: "",
    artist: "",
    medium: "",
    date: "",
    description: "",
    translationFr: "",
    translationEs: "",
    translationCh: ""
}

// test: "I am an artwork found inside my reducer!",
//     title: "",
//      imageURL: "",
//     artistName: "",
//     media: "",
//     year: "",
//      exhibitionId: "",
//      sensorId: "", optional
//     artworkDetails: [
//         {
//             description: "",
//             languageCode: ""
//         },
//         {
//             description: "",
//             languageCode: ""
//         }
//     ]

const artworkReducer = (state = initState, action) => {
    switch (action.type) {
        // move individual cases to one called add_form, which contains the title, artist, ...
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "SET_ARTIST":
            return {
                ...state,
                artist: action.payload
            }
        case "SET_MEDIUM":
            return {
                ...state,
                medium: action.payload
            }
        case "SET_DATE":
            return {
                ...state,
                date: action.payload
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