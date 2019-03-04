/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import reduxImmutableStatateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './reducers'


// Middleware
const middleware = () => {
    return applyMiddleware(createLogger(), thunk, reduxImmutableStatateInvariant())
}


const configureStore = (initialState)=>{
    return createStore(
        rootReducer,
        initialState,
        middleware()
    );
};
export default configureStore;