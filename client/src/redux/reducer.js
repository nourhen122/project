import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes";


const init = {
    users:null,
    loading:false,
    errors:null
}

const reducer = (state=init,{type,payload}) => {
switch (type) {
    case GET_USERS:
        return {
            ...state,loading:true
        }
    case GET_USERS_SUCCESS:
        return {
            ...state,loading:false,users:payload      
          }
    case GET_USERS_FAIL:
        return {
            ...state,loading:false,errors:payload
        }
    case REGISTER : 
    return {
        ...state,loading:true
    }
    case REGISTER_SUCCESS :
        return {
            ...state,loading:false,users:payload,errors:null
        }
    case REGISTER_FAIL :
        return{
            ...state,loading:false,errors:payload
        }



    default:
        return state
}
}



export default reducer