
/**
 * Created by Raphael Karanja on 2019-03-03.
 */

import React from 'react'
import { View, Text } from 'react-native'
export default class EventsForm extends React.Component {
    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:'red',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text>{ 'EventsForm Screen ' }</Text>
            </View>
        )
    }
}