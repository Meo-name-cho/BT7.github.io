import React from 'react'
import './Box.scss'
import * as FaIcons from "react-icons/fa";



function BoxTokyo(props) {
    console.log(props)
    return (
        <div className="Tokyo">
            <div className="Tokyo__card">
                <div className="Tokyo__image">
                    <img src={props.Image} alt="" width="100%" height="180px"/>
                </div>
                <div className="Tokyo__para">
                    <h3>{props.title}</h3>
                    <p>{props.para} <FaIcons.FaCheck /></p>
                    <p>{props.date}</p>
                </div>
               
            </div>
          
        </div>
       
    )
}

export default BoxTokyo
