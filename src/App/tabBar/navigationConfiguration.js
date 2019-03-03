/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import { createBottomTabNavigator } from 'react-navigation';

import EventsTabNavigation from '../eventsTab/views/EventsTabNavigation';
import ProfileTabNavigation from  '../profileTab/views/ProfileTabNavigation';

const routeConfiguration = {
    Events: { screen: EventsTabNavigation },
    Profile: { screen: ProfileTabNavigation }
}

const tabBarConfiguration = {
    tabBarOptions:{
        activeTintColor: 'white',
        inactiveTintColor: 'blue',
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white',
    }
}

export const TabBar = createBottomTabNavigator(routeConfiguration,tabBarConfiguration)