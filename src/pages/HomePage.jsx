import React from 'react';
import './HomePage.css';
import Orange from '../images/orangeMoney.png'
import logo1 from '../images/Vector.png'
import logo2 from '../images/vector_2.png'
import logo3 from '../images/vector_3.png'
import Certificate from '../images/certificate.png';
import DashboardTile from '../Components/DashboardTile/DashboardTile';
import DownloadButton from '../Components/DownloadButton/DownloadButton';
import Filter from '../Components/Filter/Filter';
import Table from '../Components/Table/Table';
import { connect } from 'react-redux';
import { selectUserKeycloak } from '../store/reducers/user/user.selectors';
import { getCommissionsByUserByMonthAction, getCommissionsByUserBySemesterAction } from './../store/reducers/commissions/commissions.action';
import { createStructuredSelector } from 'reselect';
import { useEffect, useState } from 'react';
import { selectCommissionList, selectCummulatedCommissions } from '../store/reducers/commissions/commissions.selectors';
import { selectApiUser, selectApiUserRegime } from '../store/reducers/ApiUser/apiuser.selectors';
import { getApiUserByPhoneNumber } from '../store/reducers/ApiUser/apiUser.actions';
import { ConstRegime } from '../utils/constants';
import { ConstMonths } from './../utils/constants';
import { selectCommissionsPeriod } from './../store/reducers/commissions/commissions.selectors';
import LogoutBoutton from '../Components/LogOutButton/logoutBoutton';

function HomePage({getCommissionsByUserByMonth,currentUser,regime,commissions,currentApiUser,getApiuser,cummul,period}) {
    
    
    useEffect(() => {
       
          //requestAuthenticationAsync();
           
          setTimeout(() => {
            getApiuser(currentUser.tokenParsed.preferred_username)
            const currentMonth = new Date().getMonth() + 1;
            const currentYear = new Date().getFullYear();
            console.log("Current",regime);
         
         //console.log("apiUser ", currentApiUser.apiUser.companyName);
          getCommissionsByUserByMonth(currentUser.tokenParsed.preferred_username,currentMonth-1,currentYear);
          }, 500);
          
         
         
        },[]);
    
  

        

               
          

  return (
    
        <div className="d-flex content">
            {/* side bar start */}
            <div className=" sidebar ">
                <div >
                    <img src={Orange} alt="" className="logo img-fluid" />
                </div>
                <div className='title_nav'>
                    Génération automatique 
                    des attestations de retenue 
                    à la source
                </div>
                <div className='bottom_side_imge'>
                    {/* <img src={Certificate} alt="" className="img-custom" /> */}
                </div>
            </div>
            {/* sidebar end */}
        
            {/* main start col-sm-12*/}
            <div className=" mainside px-5 ">
                <div className="d-flex justify-content-between ">
                 <Filter/>
                 <LogoutBoutton/>
                </div>
                <div className='row my-2'>
                    <div className='col-md-4 '>
                    <DashboardTile 
                        title={"Commissions HT"}
                        value={cummul.amountCommission}
                        backgroundColor="#FDA006"
                        subtitle="Période"
                        subtitleValue={period}
                        >
                            <img src={logo1} alt="dollars"/>
                        </DashboardTile>
                    </div>
                    <div className='col-md-4'>
                       
                    <DashboardTile
                        title={"Taxe AIR"}
                        value={cummul.amountAir}
                        backgroundColor="#3DA5F4"
                        subtitle="Taux prélevé "
                        subtitleValue={regime}
                        >
                            <img src={logo2} alt="5.5%"/>
                    </DashboardTile>

                    </div>
                    <div className='col-md-4'>
                    <DashboardTile 
                        title={"TVA"} 
                        value={cummul.amountTva}
                        backgroundColor="#F1536E"
                        subtitle="Taux prélevé "
                        subtitleValue="19.25%"
                        >
                        <img src={logo3} alt="dollars"/>
                    </DashboardTile>
                    </div>
                </div>
           
               
                <Table commissions={commissions}/>
    
                <DownloadButton/>
          
            </div>
            {/* main end */}
            
        </div>
    
  )
}

const mapStateToProps = createStructuredSelector({
   
    currentUser: selectUserKeycloak,
    commissions: selectCommissionList,
    cummul: selectCummulatedCommissions,
    period:selectCommissionsPeriod,
    currentApiUser: selectApiUser,
    regime:selectApiUserRegime,
  });
  
  const mapDispatchToProps = (dispatch) => ({
   // requestAuthenticationAsync: () => dispatch(requestAuthenticationAsync()),
    getCommissionsByUserByMonth:(PhoneNumber, mois,year)=> dispatch(getCommissionsByUserByMonthAction(PhoneNumber,mois,year)),
    getApiuser: (phonenumber) => dispatch(getApiUserByPhoneNumber(phonenumber)),
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);