import React, { useState } from 'react'
import filtre from '../../images/filtre.png'
import Month from './Month';
import Semester from './Semester';

export default function Filter() {
    const [selectMois, setSelectMois] = useState(false);
  const [selectSemestre, setSelectSemestre] = useState(false);
  
    

    const handleMois = ()=>{
        setSelectMois(true);
        setSelectSemestre(false);
    }

    const handleSemestre = ()=>{
        setSelectMois(false);
        setSelectSemestre(true);
    }

  return (
 <div className="d-flex my-3">
        <div className="dropdown">
  <button className="btn bg-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   <img src={filtre} alt="Filtre"/>
     Filtre
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a onClick={handleMois} className="dropdown-item" >Filtrer par mois</a></li>
    <li><a onClick={handleSemestre} className="dropdown-item">Filtrer par semestre</a></li>
    
  </ul>
        </div>
            {
                    selectSemestre && <Semester/>
                 
            }

            {
                selectMois && <Month/>
                
            }
 </div>
  )
  }
