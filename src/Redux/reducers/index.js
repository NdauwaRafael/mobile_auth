/**
 * Created by Raphael Karanja on 2019-03-04.
 */
import {combineReducers} from 'redux';

import event from  './Events';
import profile from './Profile'
const rootReducer = combineReducers({
    event,
    profile
});
export default rootReducer;