import { initialWindowMetrics } from "react-native-safe-area-context"
import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from "../action/constant"

const initialState ={
    users: []
} 

export const userReducer = (state = {...initialState}, action) => {
    // console.log('payload',action.payload)
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                loading: true,
                users: state.users
            }
        case GET_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        case GET_USERS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}