import commissionsActionTypes from './commissions.types';
import API, { error500Message } from "../../../utils/API";
import { toast } from "react-toastify";
import Semester from './../../../Components/Filter/Semester';
import { routes } from './../../../utils/routes';


export const loadingAction = () => ({
    type: commissionsActionTypes.LOADING_ACTION
});

export const successAction = (commissions) => ({
    type: commissionsActionTypes.SUCCESS_ACTION,
    payload: commissions
});
export const errorAction = (error) => ({
    type: commissionsActionTypes.ERROR_ACTION,
    payload: error
});

export const getCommissionsByUserAction = (user) => (dispatch) => {
    dispatch(loadingAction());
    return new Promise((resolve, reject) => {
        API.get(`${routes.getCommissionsByUser}/${user}`)
        .then((res) => {
            console.log("res ", res);
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

export const getCommissionsByUserBySemesterAction = (PhoneNumber,Semester) => (dispatch) => {
    dispatch(loadingAction());
    return new Promise((resolve, reject) => {
        API.get(`${routes.getCommissionsByUserBySemester}/${PhoneNumber}/semester/${Semester}`)
        .then((res) => {
            console.log("semester ", res);
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

export const getCommissionsByUserByMonthAction = (PhoneNumber, mois,year) => (dispatch) => {
    dispatch(loadingAction());
    return new Promise((resolve, reject) => {
        API.get(`${routes.getCommissionsByUserByMonth}/${PhoneNumber}/month/${mois}/year/${year}`)
        .then((res) => {
            console.log("hello");
            dispatch(loadingAction);
            dispatch(successAction(res.data));
            resolve(res);
        }).catch((error) => {
            console.log("hello 1");
            dispatch(loadingAction);
            dispatch(errorAction(error.message));
            toast.error(error.message);
            reject(error);
        });
    })
}