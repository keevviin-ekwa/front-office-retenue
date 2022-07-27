import { Action } from "history"
import { filterTypes } from "./filter.types"

const initialState = {
    mois: null,
    annee: null,
    semester: null
}

export const filterReducers = (state = initialState, action) => {
    switch (action.type) { 
        case filterTypes.ADD_FILTER:
            return {
                mois: action.payload.mois,
                annee: action.payload.annee,
                semester: action.payload.semester
            }
        
        default: return state;
    }
}