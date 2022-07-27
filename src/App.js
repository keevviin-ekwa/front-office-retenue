import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import './App.css';
import { selectUser, selectUserAuthentication, selectUserCurrentUser, selectUserKeycloak, selectUserKeycloakUserProfile } from "./store/reducers/user/user.selectors";
import { requestAuthenticationAsync } from "./store/reducers/user/user.actions";
import HomePage from './pages/HomePage';
import { selectCommissionList } from "./store/reducers/commissions/commissions.selectors";
import { getCommissionsByUserByMonthAction } from "./store/reducers/commissions/commissions.action";
import { getApiUserByPhoneNumber } from "./store/reducers/ApiUser/apiUser.actions";


function App({ requestAuthenticationAsync, authenticated}) {

  useEffect(() => {
  //  console.log("useEffect ", currentUser);
    requestAuthenticationAsync();
    //getApiuser(currentUser.tokenParsed.preferred_username)
   // const currentMonth = new Date().getMonth() + 1
   // console.log("Current",currentMonth);
   // getCommissionsByUserByMonth(currentUser.tokenParsed.preferred_username,currentMonth);
  }, [authenticated]);

  return (
    <>{}
      {
        authenticated === true 
        ?
          <HomePage/>
        :
        null
      }
    </>
    
  );
}

const mapStateToProps = createStructuredSelector({
  authenticated: selectUserAuthentication,
  currentUser: selectUserKeycloak,
  commissions: selectCommissionList
});

const mapDispatchToProps = (dispatch) => ({
  requestAuthenticationAsync: () => dispatch(requestAuthenticationAsync()),
  getCommissionsByUserByMonth:(PhoneNumber, mois)=> dispatch(getCommissionsByUserByMonthAction(PhoneNumber,mois)),
  getApiuser: (user) => dispatch(getApiUserByPhoneNumber(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
