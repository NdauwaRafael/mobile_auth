/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createLogger} from 'redux-logger';

import event from './reducers/Events'


// Middleware
const middleware = () => {
    return applyMiddleware(createLogger())
}


export default createStore(
    combineReducers({
        event
    }),
    middleware(),
)