import { ConstRegime } from "../../../utils/constants";

export const selectApiUser = state => state.apiUser;


export const selectApiUserRegime = state => getRate(state.apiUser.apiUser);


const getRate = (user) =>   
{
    switch(user?.regime)
    {
        case "LIBERATOIRE": return ConstRegime.LIBERATOIRE; break;
        case "SIMPLIFIE": return ConstRegime.SIMPLIFIE; break;
        case "REEL": return ConstRegime.REEL; break;
        default: return ConstRegime.NON_IDENTIFIE; break;

    }
    
}