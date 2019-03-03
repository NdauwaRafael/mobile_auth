/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import { createStackNavigator } from 'react-navigation';

//SCREENS
import ProfileDetails from './views/ProfileDetails';
import EditProfile from  './views/ProfileEdit'

const routeConfiguration = {
    ProfileDetails: { screen: ProfileDetails },
    EventsForm: { screen: EditProfile }
}
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'ProfileDetails'
};


export const ProfileTabNavigator = createStackNavigator(routeConfiguration,stackNavigatorConfiguration)