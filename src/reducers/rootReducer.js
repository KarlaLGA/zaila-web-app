import artworkReducer from './artworkReducer'
import dataReducer from './dataReducer'
import exhibitionReducer from './exhibitionReducer'
import sensorReducer from './sensorReducer'
import userReducer from './userReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    artwork: artworkReducer,
    data: dataReducer,
    exhibition: exhibitionReducer,
    sensor: sensorReducer,
    user: userReducer
})

export default rootReducer

