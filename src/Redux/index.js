/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import {createLogger} from 'redux-logger';

// Reducers
import Events from './reducers/Events';
import Profile from './reducers/Profile'



// Middleware
const middleware = () => {
    return applyMiddleware(createLogger())
}


export default createStore(
    combineReducers({
        Events,
        Profile
    }),
    middleware(),
)