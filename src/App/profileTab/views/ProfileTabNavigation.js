/**
 * Created by Raphael Karanja on 2019-03-03.
 */

// React
import React from 'react'

// Navigation
import { ProfileTabNavigator} from '../navigationConfigutation'

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'


class ProfileTabNavigation extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
    }

    render(){
        const { navigationState, dispatch } = this.props;
        return (
            <ProfileTabNavigator
                navigation={
                    {
                        dispatch: dispatch,
                        state: navigationState
                    }
                }
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navigationState: state.profileTab
    }
}

export default connect(mapStateToProps)(ProfileTabNavigation);