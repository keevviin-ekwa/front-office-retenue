import React from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getCommissionsByUserAction, getCommissionsByUserByMonthAction } from './../../store/reducers/commissions/commissions.action';
import { useEffect, useState } from 'react';
import { selectUserKeycloak } from '../../store/reducers/user/user.selectors';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { fr } from "date-fns/locale";
import moment from 'moment';
import { AddfilterAction } from '../../store/reducers/Filter/fliter.action';
import Semester from './Semester';


function Month({getCommissionsByUserByMonth,currentUser,addFilter}) {
  useEffect(() => {
   
  })
  const [mois,setMois]= useState(new Date().getMonth() + 1);
  const [value, setValue] = useState(null);
  const handleChangeSelect = (e) => {
    setMois(e.target.value);
    
  }
  const  handleClickFilter = () => {
    console.log("he",value.getMonth())
    console.log("year", value.getFullYear())
    let filter = {
      mois: value.getMonth() + 1,
      annee: value.getFullYear(),
      semester:null
    }
    addFilter(filter)
    getCommissionsByUserByMonth(currentUser.tokenParsed.preferred_username,value.getMonth()+1,value.getFullYear());
  }
  return (
    <div className="mx-5">
                {/* <form className="row g-5">
                      <div className="col-auto">
                        <select className="form-select btn-lg"
                          aria-label="Default select example"
                          defaultValue={mois} name='select-1'
                          onChange={handleChangeSelect}
                          >
                          <option value="1">Janvier</option>
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
                        </select>
                      </div>
                      <div className="col-auto">
                        <button 
                        type="button" 
                        className="btn btn-dark  btn-lg"
                        onClick={handleClickFilter}
                        >Filtrer</button>
                      </div>
                    </form> */}
                    <div className="row g-5">
                      <div className="col-auto">
                      <LocalizationProvider adapterLocale={fr} dateAdapter={AdapterDateFns}>
                      <DatePicker
                        
                        label="Choisissez un mois"
                        value={value}
                        minDate={moment('01/01/2021').toDate()}
                        maxDate={new Date()}
                        views={['year', 'month']}
                        onChange={(newValue) => {
                        setValue(newValue);
                        console.log(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                     </LocalizationProvider>
                      </div>

                      <div className="col-auto">
                        <button 
                        type="button" 
                        className="btn btn-dark  btn-lg"
                        onClick={handleClickFilter}
                        >Filtrer</button>
                      </div>

                    </div>
                  
               
                    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectUserKeycloak,
});

const mapDispatchToProps = (dispatch) => ({
  getCommissionsByUserByMonth: (phonenumber, _month, _year) => dispatch(getCommissionsByUserByMonthAction(phonenumber, _month, _year)),
  addFilter:(_filtre)=>dispatch(AddfilterAction(_filtre))
});
export default connect(mapStateToProps, mapDispatchToProps)(Month);