/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import reduxImmutableStatateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
// Reducers
import event from './reducers/Events';
import profile from './reducers/Profile';
import auth from './reducers/Auth'



// Middleware
const middleware = () => {
    return applyMiddleware(createLogger(), thunk, reduxImmutableStatateInvariant())
}


export default createStore(
    combineReducers({
        auth,
        event,
        profile
    }),
    middleware(),
)