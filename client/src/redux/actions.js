import axios from "axios"
import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes"

export const registerUser = (newUser)=> async (dispatch )=> {
    dispatch ({
        type : REGISTER 
    })
    try {
        const {data} = await axios.post ('/user/register',newUser);
        dispatch({
            type :REGISTER_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch ({
            type : REGISTER_FAIL ,
            payload : error.response.data
        })
    }
}



export const getUsers = ( ) => async (dispatch) => {
    dispatch({
        type:GET_USERS
    })
    try {
        const res = await axios.get('/user/getUsers')
        console.log (res)
        dispatch({
            type : GET_USERS_SUCCESS,
            payload:res.data
            
        })
    } catch (error) {
        dispatch({
            type:GET_USERS_FAIL,
            payload:error.response.data
        })
        
    }
}