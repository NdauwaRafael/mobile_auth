/**
 * Created by Raphael Karanja on 2019-03-05.
 */
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILED
}   from '../../constants/ActionTypes';

export const loginUserSuccess = (resp)=>{
    return {
        type: LOGIN_USER_SUCCESS,
        user: resp
    }
};

export const loginUser = ({email, password})=>dispatch=>{
    return dispatch(loginUserSuccess({
        id: 'user#123',
        name: 'John Doe',
        email: 'jdoe@gmail.com'
    }));
}