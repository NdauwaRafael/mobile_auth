/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import { TabNavigator } from 'react-navigation';

import EventsTabNavigation from '../eventsTab/views/EventsTabNavigation';
import ProfileTabNavigation from  '../profileTab/views/ProfileTabNavigation';

const routeConfiguration = {
    Events: { screen: EventsTabNavigation },
    Profile: { screen: ProfileTabNavigation }
}