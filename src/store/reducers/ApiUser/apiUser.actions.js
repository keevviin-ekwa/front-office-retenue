
import { ApiUserTypes } from './apiUser.types';
import API, { error500Message } from "../../../utils/API";
import { toast } from "react-toastify";
import { routes } from './../../../utils/routes';

export const loadingAction = () => ({
    type: ApiUserTypes.LOADING_ACTION_API
});

export const successAction = (user) => ({
    type: ApiUserTypes.SUCCESS_ACTION_API,
    payload: user
});
export const errorAction = (error) => ({
    type: ApiUserTypes.ERROR_ACTION_API,
    payload: error
});


export const getApiUserByPhoneNumber = (phoneNumber) => (dispatch) => {
    dispatch(loadingAction());
    return new Promise((resolve, reject) => {
        API.get(`${routes.getApiByPhoneNumber}/${phoneNumber}`)
        .then((res) => {
            console.log("semester1 ", res.data.data);
            dispatch(loadingAction);
            dispatch(successAction(res.data));
            resolve(res);
        }).catch((error) => {
            console.log(error);
            dispatch(loadingAction);
            dispatch(errorAction(error.message));
            toast.error(error.message);
            reject(error);
        });
    })
}

