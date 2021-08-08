import React from "react";
import "./Card.scss";
import * as FaIcons from "react-icons/fa";



function CardUI() {

    console.log()
    return (

        <div className="Home__Room2">
            <div className="Home__tab">
                <div className="Home__tabmini">
                    <FaIcons.FaFire fontSize="30px" color="red"/>
                    <h3>Thịnh Hành</h3>
                </div>
                <div className="Home__tabmini">
                    <FaIcons.FaMusic fontSize="30px" color="yellow"/>
                    <h3>Âm nhạc</h3>
                </div>
                <div className="Home__tabmini">
                    <FaIcons.FaHeartbeat fontSize="30px" color="orangered"/>
                    <h3>Trò chơi</h3>
                </div>
                <div className="Home__tabmini">
                    <FaIcons.FaRegNewspaper fontSize="30px" color="blue"/>
                    <h3>Tin tức</h3>
                </div>
                <div className="Home__tabmini">
                    <FaIcons.FaPassport fontSize="30px" color="blue"/>
                    <h3>Thể thao</h3>
                </div>
            </div>
          
            <hr />
        
        </div>



    );
}

export default CardUI;

