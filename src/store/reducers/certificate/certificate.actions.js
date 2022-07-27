
import download from 'downloadjs';
import API, { error500Message } from "../../../utils/API";
import { toast } from "react-toastify";
import { certificateType } from './certificate.type';
import { routes } from './../../../utils/routes';

export const loadingAction = () => ({
    type: certificateType.LOADING_CERTIFICATE
});

export const successAction = (file) => ({
    type: certificateType.SUCCESS_DOWNLOAD_CERTIFICATE,
    payload: file
});
export const errorAction = (error) => ({
    type: certificateType.ERROR_DOWNLOAD_CERTIFICATE,
    payload: error
});


export const downloadMonthlyCertificateAction = (PhoneNumber,month,year) => (dispatch) => {
    dispatch(loadingAction());
    return new Promise((resolve, reject) => {
        API.get(`${routes.downloadMonthlyCertificate}/${PhoneNumber}/month/${month}/year/${year}`,{
            responseType: "blob",
        })
        .then((res) => {
             dispatch(loadingAction);
             download(res.data,"Certificate.pdf","Application/pdf")
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

export const downloadSemesterCertificateAction = (PhoneNumber,semester,year) => (dispatch) => {
    dispatch(loadingAction());
    return new Promise((resolve, reject) => {
        API.get(`${routes.downloadSemesterCertificate}/${PhoneNumber}/semester/${semester}/year/${year}`,{
            responseType: "blob",
        })
        .then((res) => {
             dispatch(loadingAction);
             download(res.data,"Certificate.pdf","Application/pdf")
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