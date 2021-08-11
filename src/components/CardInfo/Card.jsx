import React from 'react'
import './Csscard.scss'

import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as TiIcons from "react-icons/ti";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";


import backgr6 from '../../assets/images/thinh_n.jpg'

function Card(props) {
    return (
        <div className="CEO__mainnew">
                <div className="title__box1">
                    <div className="title__box1--image">
                        <img src={backgr6} alt="" width="100px" height="100px" />
                    </div>
                    <div className="title__box1--content">
                        <h3>{props.title1}</h3>
                        <div className="title__box1__para">
                            <p>Được tài trợ</p>
                            <GiIcons.GiEarthAfricaEurope />
                        </div>

                    </div>
                    <div className="title__box1--icon">
                        <FaIcons.FaEllipsisH />
                    </div>
                </div>
                <div className="title__box2">
                    <h4>{props.title}</h4>
                    <img src={props.img1} alt="" />
                </div>
                <div className="title__box3" >
                    <div className="title__box3--meme">
                        <div className="title__icons">
                            <FaIcons.FaRegLaughSquint />
                            <FaIcons.FaRegLaughSquint />
                            <RiIcons.RiEmotionSadLine />
                        </div>
                        <div className="title__count">
                            <a href="/">2 binh luan</a>
                            <a href="/">1 Luot chia se</a>
                        </div>
                        <hr />
                    </div>
                    
                    <div className="title__box3--share">
                        <div className="title__like">
                            <button><FaIcons.FaRegLaughSquint /> Thích</button>
                        </div>
                        <div className="title__Com">
                            <button><TiIcons.TiMessage /> bình luận</button>
                        </div>
                        <div className="title__Sharee">
                            <button><RiIcons.RiShareForwardLine /> Chia sẻ</button>
                        </div>
                    </div>
                    
                </div>
      </div>
    
      
    )
}

export default Card
