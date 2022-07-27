
import { certificateType } from './certificate.type';

const initialState = {
    file:null,
    success:false,
    error:null,
    loading:false,
};

 
export const certificateReducer = (state=initialState,action)=>

{
  switch(action.type) {

    case certificateType.SUCCESS_DOWNLOAD_CERTIFICATE:
        return{
            ...state,
            file:action.payload,
            error:null,
            success: true
        }
    
    case certificateType.LOADING_CERTIFICATE:
        return{
            ...state,
            loading:!state.loading
        } 
        
    case certificateType.ERROR_DOWNLOAD_CERTIFICATE:
        return{
                ...state,
                error:action.payload
        }    
    default: return state;

  }

}