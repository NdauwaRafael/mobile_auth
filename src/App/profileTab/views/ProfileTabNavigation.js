/**
 * Created by Raphael Karanja on 2019-03-03.
 */

// React
import React from 'react';
import {createAppContainer} from "react-navigation";


// Navigation
import { ProfileTabNavigator} from '../navigationConfigutation'

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const ProfileNavigator = createAppContainer(ProfileTabNavigator);

class ProfileTabNavigation extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
    }


    render(){
        // const { navigationState, dispatch } = this.props;
        return (
            <ProfileNavigator/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navigationState: state.profileTab
    }
}

export default connect(mapStateToProps)(ProfileTabNavigation);