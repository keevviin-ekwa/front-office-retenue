import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCommissionsByUserBySemesterAction } from '../../store/reducers/commissions/commissions.action';
import { AddfilterAction } from '../../store/reducers/Filter/fliter.action';
import { selectUserKeycloak } from '../../store/reducers/user/user.selectors';


 function Semester({getCommissionsByUserBySemester,currentUser,AddFilter}) {
  
  const [firstDate, setFirstDate] = useState(1);
  const [secondDate, setSecondDate] = useState(6);
  const [semestre, setSemestre] = useState(1);



  const handleFisrtDate = (e)=>{
    setFirstDate(parseInt(e.target.value));
    setSecondDate(parseInt(e.target.value)+5);
    if(e.target.value ===1){
      setSemestre(1);
    }
    else{
      setSemestre(2);
    }
  
  }


   const handleClick = () => {
    let filter = {
      mois: null,
      annee: new Date().getFullYear(),
      semester:semestre
     }
     AddFilter(filter)
    getCommissionsByUserBySemester(currentUser.tokenParsed.preferred_username,semestre);
  }

  return (
    <div className="mx-5">
    <form className="row g-5">
          <div className="col-auto">
            <select className="form-select btn-lg"
              aria-label="Default select example"
              defaultValue={1} name='select-1'
              onClick={handleFisrtDate}
              >
              <option value="1">Janvier</option>
            
              <option value="7">Juillet</option>
            </select>
          </div>
          <div className="col-auto">
            {/* <select className="form-select btn-lg" disabled
              aria-label="Default select example" value={secondDate} name='select-2'
              >
              <option value="1" >Janvier</option>
              <option value="2">Février</option>
              <option value="3">Mars</option>
              <option value="4">Avril</option>
              <option value="5">Mai</option>
              <option value="6">Juin</option>
              <option value="7">Juillet</option>
              <option value="8">Aout</option>
              <option value="9">Septembre</option>
              <option value="10">Octobre</option>
              <option value="11">Novembre</option>
              <option value="12">Decembre</option>
            </select> */}
            <div className="btn btn-lg btn-secondary disabled " >{secondDate==6?"Juin":"Decembre"}</div>
          </div>
          
          <div className="col-auto">
            <button 
            onClick={handleClick}
            type="button" 
            className="btn btn-dark btn-lg">Filtrer</button>
          </div>
        </form>
        </div>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectUserKeycloak,
});

const mapDispatchToProps = (dispatch) => ({
  getCommissionsByUserBySemester: (phonenumber, _semester) => dispatch(getCommissionsByUserBySemesterAction(phonenumber, _semester)),
  AddFilter:(_filter) => dispatch(AddfilterAction(_filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Semester);
