import artworkReducer from './artworkReducer'
import dataReducer from './dataReducer'
import exhibitionReducer from './exhibitionReducer'
import sensorReducer from './sensorReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    artwork: artworkReducer,
    data: dataReducer,
    exhibition: exhibitionReducer,
    sensor: sensorReducer
})

export default rootReducer

