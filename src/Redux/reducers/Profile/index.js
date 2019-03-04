/**
 * Created by Raphael Karanja on 2019-03-05.
 */
import {ADDED_AN_EVENT} from '../../constants/ActionTypes';

let initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case ADDED_AN_EVENT :
            return {...state, event: action.event};

        default :
            return state;
    }
}