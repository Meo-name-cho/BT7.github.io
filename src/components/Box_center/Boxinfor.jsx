import React from "react";
import "./Card.scss";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
// import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as TiIcons from "react-icons/ti";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";



import backgr6 from '../../assets/images/thinh_n.jpg'
import anh1 from '../../assets/images/dep1.jpg'
import anh2 from '../../assets/images/dep2.jpg'
import anh3 from '../../assets/images/dep3.jpg'
import anh4 from '../../assets/images/dep4.jpg'
import anh5 from '../../assets/images/dep5.jpg'
import anh6 from '../../assets/images/anh1.jpg'
import anh7 from '../../assets/images/anh2.jpg'
import anh8 from '../../assets/images/anh3.jpg'



function Boxinfor(props) {

    console.log()
    return (
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
            <div className="CEO__mainnew">
                <div className="title__box1">
                    <div className="title__box1--image">
                        <img src={props.img1} alt="" width="100px" height="100px" />
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
                    <img src={anh1} alt="" />
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
        </div>
    );
}

export default Boxinfor;

