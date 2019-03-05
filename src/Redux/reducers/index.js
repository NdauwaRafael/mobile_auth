/**
 * Created by Raphael Karanja on 2019-03-04.
 */
import {combineReducers} from 'redux';

import event from  './Events';
import profile from './Profile';
import auth from './Auth'
const rootReducer = combineReducers({
    auth,
    event,
    profile
});
export default rootReducer;