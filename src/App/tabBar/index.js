/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import { createBottomTabNavigator } from 'react-navigation';

import EventsTabNavigation from '../eventsTab/views/EventsTabNavigation';
import ProfileTabNavigation from  '../profileTab/views/ProfileTabNavigation';
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

const routeConfiguration = {
    Events: { screen: EventsTabNavigation },
    Profile: { screen: ProfileTabNavigation }
}

const tabBarConfiguration = {
    navigationOptions:{
        activeTintColor: 'white',
        inactiveTintColor: 'blue',
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white',
        tabBarLabel: 'Events',
        tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
    }
}

export const TabBar = createBottomTabNavigator(routeConfiguration,tabBarConfiguration)