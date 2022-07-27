
import commissionsActionTypes from './commissions.types';
const initialState = {
    commissions: [],
    success:false,
    error:null,
    loading:false,
};


export const commissionReducer = (state=initialState,action)=>

{
  switch(action.type) {

    case commissionsActionTypes.SUCCESS_ACTION:
        return{
            ...state,
            commissions:action.payload,
            error:null,
            success: true
        }
    
    case commissionsActionTypes.LOADING_ACTION:
        return{
            ...state,
            loading:!state.loading
        } 
        
    case commissionsActionTypes.ERROR_ACTION:
        return{
                ...state,
                error:action.payload
        }    
    default: return state;

  }

}