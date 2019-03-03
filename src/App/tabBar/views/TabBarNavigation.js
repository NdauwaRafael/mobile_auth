/**
 * Created by Raphael Karanja on 2019-03-03.
 */

// React
import React from 'react';

// Navigation
import {TabBar} from '../navigationConfiguration'

//Redux
import {connect} from 'react-redux';


class TabBarNavigation extends React.Component {
    render() {
        const {dispatch, navigationState} = this.props
        return (
            <TabBar
                navigation={
                    {
                        dispatch: dispatch,
                        state: navigationState,
                    }
                }
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabBar,
    }
};
export default connect(mapStateToProps)(TabBarNavigation)