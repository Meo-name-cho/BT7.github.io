import React from 'react'
import './App.scss'




import BoxLeft from './components/Box_left/Boxgroup'
import BoxRight from './components/Box_right/BoxChat'
import Boxinforrr from './components/Box_center/Boxinfor'

import Navbar from './components/Navbar/Navbar'
import Data from './Data.json'
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
// import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as TiIcons from "react-icons/ti";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";

import anh1 from './assets/images/dep1.jpg'
import anh2 from './assets/images/dep2.jpg'
import anh3 from './assets/images/dep3.jpg'
import anh4 from './assets/images/dep4.jpg'
import anh5 from './assets/images/dep5.jpg'
import anh6 from './assets/images/anh1.jpg'
import anh7 from './assets/images/anh2.jpg'
import anh8 from './assets/images/anh3.jpg'
import backgr6 from './assets/images/thinh_n.jpg'


import Card from './components/CardInfo/Card'

import bacground from './assets/images/dep1.jpg'
function App() {
    var listpost = [
        {
            img1: anh1,
            title1: "Taylor",
            title: "hello everyone"
        },
        {
            img1: anh3,
            title1: "Taylor",
            title: "hello everyone"
        },
        {
            img1: anh5,
            title1: "Taylor",
            title: "hello everyone"
        },
        {
            img1: anh7,
            title1: "Taylor",
            title: "hello everyone"
        }

    ]

    let element = listpost.map((list, index) => {
        return <Card title={list.title}
            title1={list.title1}
            img1={list.img1}
        />
    })


    return (
        <div className="App" >
            <div className="App__box">
                <div className="App__navbar">
                    <Navbar placeholder="Tìm Kiếm" data={Data} />
                </div>
                <hr />
                <div className="App__boxbody">
                    <BoxLeft />
                    <div className="CEO">
                        <div className="CEO__news">
                            <div className="Box__new--first">
                                <img src={backgr6} alt="" />
                                <IoIcons.IoIosAddCircle />
                                <h3>Tạo tin</h3>
                            </div>
                            <div className="Box__new--two">
                                <img src={anh1} alt="" />
                                <h3>Mèo</h3>
                            </div>
                            <div className="Box__new--two">
                                <img src={anh2} alt="" />
                                <h3>Mèo 1</h3>
                            </div>
                            <div className="Box__new--two">
                                <img src={anh3} alt="" />
                                <h3>Mèo 2</h3>
                            </div>
                            <div className="Box__new--two">
                                <img src={anh4} alt="" />
                                <h3>Mèo 3</h3>
                            </div>

                        </div>
                        <div className="CEO__post">
                            <div className="CEO__box">
                                <img src={backgr6} alt="" width="100px" height="100px" />
                                <input type="text" placeholder="Thịnh ơi bạn đang nghĩ gì thế? " />

                            </div>
                            <hr />
                            <div className="CEO__meme">
                                <ul>
                                    <li>
                                        <a href="/" className="CEO__meme--taks1">
                                            <FaIcons.FaVideo />
                                            <h4>Video trực tiếp của bạn</h4>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="CEO__meme--taks2">
                                            <FaIcons.FaRegImages />
                                            <h4>Ảnh/Video của bạn</h4>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="CEO__meme--taks3">
                                            <FaIcons.FaRegLaughBeam />
                                            <h4>Cảm xúc/Hoạt động</h4>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="CEO__meeting">
                            <buttom className="CEO__meeting--create">
                                <MdIcons.MdVideoCall />
                                <h4>Phòng họp mặt</h4>
                            </buttom >
                            <div className="CEO__meeting--user">
                                <img src={backgr6} alt="" width="100px" height="100px" />
                                <img src={backgr6} alt="" width="100px" height="100px" />
                                <img src={backgr6} alt="" width="100px" height="100px" />
                                <img src={backgr6} alt="" width="100px" height="100px" />
                                <img src={backgr6} alt="" width="100px" height="100px" />
                                <img src={backgr6} alt="" width="100px" height="100px" />
                                <img src={backgr6} alt="" width="100px" height="100px" />
                                <img src={backgr6} alt="" width="100px" height="100px" />
                                <img src={backgr6} alt="" width="100px" height="100px" />
                                <img src={backgr6} alt="" width="100px" height="100px" />
                            </div>
                        </div>
                        {element}
                    </div>
                    <BoxRight />
                </div>
            </div>
        </div>
    )
}

export default App

