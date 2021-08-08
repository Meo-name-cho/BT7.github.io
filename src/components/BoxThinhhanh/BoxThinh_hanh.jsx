import React from 'react'
import './Box2.scss'

function BoxThinh_hanh(props) {
    return (
        <div className="Box">
            <div className="Box__Popular">
                <div className="Box__image">
                    <img src={props.Image} alt="" width="100%" height="180px"/>
                </div>
                <div className="Box__para Box--edit">
                    
                        <h1>{props.title}</h1>
                        <p>{props.date}</p>
                        <p>{props.Subrice}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default BoxThinh_hanh
