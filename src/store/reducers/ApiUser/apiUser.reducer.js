
import { ApiUserTypes } from './apiUser.types';
const initialState = {
    apiUser: null,
    success:false,
    error:null,
    loading:false,
};


export const apiUserReducer = (state=initialState,action)=>

{
  switch(action.type) {

    case ApiUserTypes.SUCCESS_ACTION_API:
        return{
            ...state,
            apiUser:action.payload,
            error:null,
            success: true
        }
    
    case ApiUserTypes.LOADING_ACTION_API:
        return{
            ...state,
            loading:!state.loading
        } 
        
    case ApiUserTypes.ERROR_ACTION_API:
        return{
                ...state,
                error:action.payload
        }    
    default: return state;

  }

}