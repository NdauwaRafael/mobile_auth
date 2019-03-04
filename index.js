/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// Redux
import { Provider } from 'react-redux'
import store from './src/Redux';

// Navigation
import TabBarNavigation from './src/App/tabBar/views/TabBarNavigation';

//Navigation Helpers
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';





class RootNavigation extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <TabBarNavigation />
            </Provider>
        )
    }
}



AppRegistry.registerComponent(appName, () => RootNavigation);
