import React, { useEffect,useState } from 'react'
import logo from '../../images/pdf.png'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {downloadMonthlyCertificateAction, downloadSemesterCertificateAction } from '../../store/reducers/certificate/certificate.actions';
import { selectUserKeycloak } from './../../store/reducers/user/user.selectors';
import { selectCertificate } from '../../store/reducers/certificate/certificate.selectors';
import { selectCommissionsPeriod } from '../../store/reducers/commissions/commissions.selectors';
import { ConstMonths } from './../../utils/constants';
import { selectFilter } from '../../store/reducers/Filter/filter.selector';

function DownloadButton({downloadFile,currentUser,downloadMonthlyCertificate,period,downloadSemesterCertificate,filter}) {

  const [submit,setSubmitted] =useState(false) 

   const handleClick = ()=>{
      setSubmitted(true);
    if(filter.semester !=null && filter.semester ===1)
    {
      
      downloadSemesterCertificate(currentUser.tokenParsed.preferred_username,1,filter.annee)
      .then(res=>{
        setSubmitted(false)
      })
      .catch(err=>{

      })
    }
    else if(filter.semester !=null && filter.semester ===2){
      
      downloadSemesterCertificate(currentUser.tokenParsed.preferred_username,2,filter.annee)
      .then(res=>{
        setSubmitted(false)
      })
      .catch(err=>{

      });
    }
    else{
    //on telecharge l'attestation mensuelle en fonction du username et de la periode
      const mois= ConstMonths.indexOf(filter.mois);
      downloadMonthlyCertificate(currentUser.tokenParsed.preferred_username,filter.mois,filter.annee)
      .then(res=>{
        setSubmitted(false)
      })
      .catch(err=>{

      });
    }
      
    
   }

  return (
    <div  style={{float:"left"}} >
        <button 
        onClick={handleClick}
        type="button" 
        className="btn btn-primary">
          {
            submit ? <div class="spinner-border " role="status">
            
          </div>: <div>
            <img src={logo}  alt="logo orange" />
            Télécharger l'attestation
          </div>
          }
              
            </button>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectUserKeycloak,
  certificate: selectCertificate,
  period: selectCommissionsPeriod,
  filter:selectFilter
});

const mapDispatchToProps = (dispatch) => ({
  downloadMonthlyCertificate :  (phonenumber,month,year) => dispatch(downloadMonthlyCertificateAction(phonenumber, month,year)),
  downloadSemesterCertificate:(phonenumber,semester,year) => dispatch(downloadSemesterCertificateAction(phonenumber, semester,year))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadButton);