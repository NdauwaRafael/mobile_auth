/**
 * Created by Raphael Karanja on 2019-03-03.
 */

// React
import React from 'react';

// Navigation
import {TabBar} from '../navigationConfiguration'

//Redux
import {connect} from 'react-redux';
import {createAppContainer} from "react-navigation";

const TabBarNavigator = createAppContainer(TabBar);

class TabBarNavigation extends React.Component {
    render() {
        return (
            <TabBarNavigator/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabBar,
    }
};
export default connect(mapStateToProps)(TabBarNavigation)