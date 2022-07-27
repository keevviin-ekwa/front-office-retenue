import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import { commissionReducer } from './commissions/commissions.reducer';
import { apiUserReducer } from './ApiUser/apiUser.reducer';
import { certificateReducer } from "./certificate/certificate.reducer";
import { filterReducers } from "./Filter/filter.reducer";

export const persistConfig = {
    key: "root",
    storage,
    whitelist: [
      
        "commissions",
        "user",
        "apiUser",
        "certificate",
        "filter"
    ]
};

const topReducer = combineReducers({
    commissions: commissionReducer,
    user: userReducer,
    apiUser: apiUserReducer,
    certificate: certificateReducer,
   filter: filterReducers
});

const rootReducer = (state, action) => {
    return topReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);