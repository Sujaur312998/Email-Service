import * as actionTypes from './authActionType'

const initialState = {
    token: null,
    user: {
        fullName: '',
        email: '',
        role: ''
    },
    message: null,
    authenticate: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            const { token, user, message } = action.payload
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            return {
                ...state,
                token: token,
                user: {
                    fullName: user.name,
                    email: user.email,
                    role: user.role,
                },
                message: message
            }

        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                message: action.payload.message,
            }

        case actionTypes.IS_USER_LOGINED:
            const localToken = localStorage.getItem('token')
            const localUsers = JSON.parse(localStorage.getItem('user'))
            return {
                ...state,
                token: localToken,
                user: localUsers
            }

        case actionTypes.USER_AUTHENTICATE:
            return {
                ...state,
                authenticate: action.payload
            }

        default: return state
    }
}


