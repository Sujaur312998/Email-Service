import * as actionType from './authActionType'


export const loginSuccess = (token, user) => {
    return {
        type: actionType.LOGIN_SUCCESS,
        payload: {
            token, user,
            message:"Login Successfull"
        }
    }
}

export const loginFailed = (token, user) => {
    return {
        type: actionType.LOGIN_FAILED,
        payload: {
            message: "Invalid Credentials"
        }   
    }
}

export const isUserLogined=()=>{
    return{
        type: actionType.IS_USER_LOGINED
    }
}

export const userAuthenticate=(authenticate)=>{
    return {
        type: actionType.USER_AUTHENTICATE,
        payload: authenticate
    }
}