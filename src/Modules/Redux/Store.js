import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

//logger with default option
// import logger from 'redux-logger'
import thunk from 'redux-thunk'

//reducers
import ContentReducer from './Reducers/ContentReducer'

const reducer = combineReducers({
    content: ContentReducer,
})

export default function configStore(initialState) {
    const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)))
    return store;
}