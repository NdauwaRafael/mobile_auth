/**
 * Created by Raphael Karanja on 2019-03-04.
 */
import {ADDED_AN_EVENT } from "../../constants/ActionTypes";

export const addEventSuccess = (resp) =>{
    return {
        type: ADDED_AN_EVENT,
        events: resp
    }
}

export const addEvent = (event)=>dispatch=> {

    return dispatch(addEventSuccess(event));
}
