import React from 'react'
import './Box.scss'

import bacgr from '../../assets/images/dep1.jpg'

import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as LoIcons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";
import * as Io4Icons from "react-icons/io";
import * as BiIcons from "react-icons/bi";

function BoxChat() {
    return (
        <div className="Chat">
            <ul>
                <li>
                    Được tài trợ
                </li>
                <li>
                    <a className="Chat__box" href="/">
                            <img src={bacgr} alt=""  />
                        <div className="Chat__para">
                            <h4>This game will keeps you up all night</h4>
                        </div>

                    </a>

                </li>
                <li>
                    <a className="Chat__box" href="/">
                        <img className="Chat__image" src={bacgr} alt="" />
                        <div className="Chat__para">
                            <h4>Start Today</h4>
                        </div>
                    </a>
                </li>
                <hr />
                <li>
                    <div className="Contact__mini">
                        <div className="Contact__mini--para">Người liên hệ</div>
                        <div className="Contact__mini--icon">
                            <ul>
                                <li><a href="/"><BiIcons.BiVideoPlus /></a></li>
                                <li><a href="/"><BiIcons.BiSearch /></a></li>
                                <li><a href="/"><FaIcons.FaEllipsisH /></a></li>
                            </ul>
                        </div>
                    </div>

                </li>
                <li>
                    <a className="Chat__boxx" href="/">
                        <img className="Chat__image1" src={bacgr} alt="" width="11%" height="10%" />
                        <BsIcons.BsFillCircleFill/>
                        <div className="Chat__para1">
                            <h4>Thinh Nguyễn Văn</h4>
                        </div>

                    </a>
                </li>
                <li>
                    <a className="Chat__boxx" href="/">
                        <img className="Chat__image1" src={bacgr} alt="" width="12%" height="12%" />
                        <BsIcons.BsFillCircleFill/>
                        <div className="Chat__para1">
                            <h4>Thinh Nguyễn Văn</h4>
                        </div>

                    </a>
                </li>
                <li>
                    <a className="Chat__boxx" href="/">
                        <img className="Chat__image1" src={bacgr} alt="" width="12%" height="12%" />
                        <BsIcons.BsFillCircleFill/>
                        <div className="Chat__para1">
                            <h4>Thinh Nguyễn Văn</h4>
                        </div>

                    </a>
                </li>
                <li>
                    <a className="Chat__boxx" href="/">
                        <img className="Chat__image1" src={bacgr} alt="" width="12%" height="12%" />
                        <BsIcons.BsFillCircleFill/>
                        <div className="Chat__para1">
                            <h4>Thinh Nguyễn Văn</h4>
                        </div>

                    </a>
                </li>
                <li>
                    <a className="Chat__boxx" href="/">
                        <img className="Chat__image1" src={bacgr} alt="" width="12%" height="12%" />
                        <BsIcons.BsFillCircleFill/>
                        <div className="Chat__para1">
                            <h4>Thinh Nguyễn Văn</h4>
                        </div>

                    </a>
                </li>
                <li>
                    <a className="Chat__boxx" href="/">
                        <img className="Chat__image1" src={bacgr} alt="" width="12%" height="12%" />
                        <BsIcons.BsFillCircleFill/>
                        <div className="Chat__para1">
                            <h4>Thinh Nguyễn Văn</h4>
                        </div>

                    </a>
                </li>
                <li>
                    <a className="Chat__boxx" href="/">
                        <img className="Chat__image1" src={bacgr} alt="" width="12%" height="12%" />
                        <BsIcons.BsFillCircleFill/>
                        <div className="Chat__para1">
                            <h4>Thinh Nguyễn Văn</h4>
                        </div>

                    </a>
                </li>

            </ul>

        </div>
    )
}

export default BoxChat
