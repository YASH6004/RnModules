import axios from "axios";
import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from "../action/constant"

export const userAction = (cred) =>
    async (dispatch) => {
        try {
            console.log("cred==>>", cred.loginVal.name)
            dispatch({
                type: GET_USERS_REQUEST,
            });
            var data = JSON.stringify({
                "username": cred.loginVal.name,
                "password": cred.loginVal.pass
            });
            const response = await axios({
                method: 'post',
                url: 'https://dummyjson.com/auth/login',
                headers: {
                    'Authorization': 'Basic a21pbmNoZWxsZTowbGVscGxS',
                    'Content-Type': 'application/json'
                },
                data: data
            })
            console.log('response==>>>', response?.data)
            await dispatch({
                type: GET_USERS_SUCCESS,
                payload: response?.data //stores api data
            })
        }
        catch (error) {
            // console.log("USERerror", error.response.data.message)
            await dispatch({
                type: GET_USERS_FAIL,
                payload:  error?.response?.data?.message
            })
        }
    }
