/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import {createLogger} from 'redux-logger';

// Navigation
import { EventsTabNavigator } from '../App/eventsTab/navigationConfigutation';
import { ProfileTabNavigator } from '../App/profileTab/navigationConfigutation';
import { TabBar } from '../App/tabBar/navigationConfiguration';


// Middleware
const middleware = () => {
    return applyMiddleware(createLogger())
}


export default createStore(
    combineReducers({
        tabBar: (state,action) => TabBar.router.getStateForAction(action,state),
        eventsTab: (state,action) => EventsTabNavigator.router.getStateForAction(action,state),
        profileTab: (state,action) => ProfileTabNavigator.router.getStateForAction(action,state),
    }),
    middleware(),
)