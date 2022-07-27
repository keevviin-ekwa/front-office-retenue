import React,{useEffect} from 'react'
import './DashboardTile.css'
import logo from '../../images/Vector.png'

export default function DashboardTile(props) {
 
  return (
     <div className="box" style={{backgroundColor: props.backgroundColor}}>
       <div className="icon_title">
         <div className="icon">
           {/* <img src={props.logo}/> */}
           {props.children}
         </div>
         <div className="title">
          {props.title}
         </div>
         
       </div>
       <div className="value">
         {props.value} F cfa
       </div>
       <div className="line my-3">
            <div className="sub_line">
            </div>
        </div>
        <div className="foot">
            <div>{props.subtitle}</div>
            <div>{props.subtitleValue}</div>
        </div>
     </div>
  )
}
