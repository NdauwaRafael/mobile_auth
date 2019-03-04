/**
 * Created by Raphael Karanja on 2019-03-04.
 */
import {ADDED_AN_EVENT} from '../../constants/ActionTypes';

let initialState = '';
export default (state = initialState, action) => {
    switch (action.type) {
        case ADDED_AN_EVENT :
            return action.event;
            break;
        default :
            return state;
    }
}