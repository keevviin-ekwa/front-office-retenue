import React, { useEffect } from 'react'
import Month from './../Filter/Month';
import { ConstMonths } from './../../utils/constants';

export default function Table({commissions}) {
    
        useEffect(() => {

        },[commissions])
  return (

     commissions.length>1 && <table className="table table-active text-center">
     <thead>
     <tr>
         <th scope="col">Mois</th>
         <th scope="col">Commission HT</th>
         <th scope="col">Taxe AIR</th>
         <th scope="col">TVA Prélevé</th>
     </tr>
     </thead>
     <tbody>
     {
         
         commissions.map((item,index)=>{
             console.log("item",item.month)
             return(
                 
         <tr key={index}>
         <th scope="row">{ConstMonths[item.month]}</th>
         <td>{item.cummulCommission.toFixed(2)}</td>
         <td>{item.taxeAir.toFixed(2)}</td>
         <td>{item.tva.toFixed(2)}</td>
         </tr>
             )
         })
     }

     
     </tbody>
        </table>
  )
}
