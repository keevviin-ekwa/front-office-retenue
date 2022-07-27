import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getApiUserByPhoneNumber } from '../../store/reducers/ApiUser/apiUser.actions';
import { selectApiUser } from '../../store/reducers/ApiUser/apiuser.selectors';
import { requestAuthentificationLogoutAsync } from '../../store/reducers/user/user.actions';
import { selectUserCurrentUser, selectUserKeycloak } from '../../store/reducers/user/user.selectors';

 function LogoutBoutton({apiUser,requestLogoutAsync}) {
    
    const handleClick= (e)=>{
        e.preventDefault();
        e.stopPropagation();
        requestLogoutAsync();
        //window.location.reload();
    }


  return (
    <div className="dropdown my-3">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {apiUser.apiUser?.companyName}
  </button>
  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">{apiUser.apiUser?.phoneNumber}</a></li>
    <li><a className="dropdown-item" href="#">NIU: {apiUser.apiUser?.niu}</a></li>
    <li><a className="dropdown-item" href="#">Regime: {apiUser.apiUser?.regime}</a></li>
    <li ><a onClick={handleClick}  className="dropdown-item" >Deconnexion</a></li>
  </ul>
</div>
  )
}

const mapStateToProps = createStructuredSelector({
   
    //currentUser: selectUserKeycloak,
    apiUser: selectApiUser,
   // regime:selectApiUserRegime,
  });
  
  const mapDispatchToProps = (dispatch) => ({
   // requestAuthenticationAsync: () => dispatch(requestAuthenticationAsync()),
    requestLogoutAsync: ()=> dispatch( requestAuthentificationLogoutAsync()),
    getApiuser: (phonenumber) => dispatch(getApiUserByPhoneNumber(phonenumber)),
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(LogoutBoutton)