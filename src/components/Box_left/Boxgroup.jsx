import React from 'react'

import './Box2.scss'
import backgr1 from '../../assets/images/node.jpg'
import backgr2 from '../../assets/images/React.jpg'
import backgr3 from '../../assets/images/TDung.jpg'
import backgr4 from '../../assets/images/HKGH.jpg'
import backgr5 from '../../assets/images/python.png'
import backgr6 from '../../assets/images/thinh_n.jpg'

// import { FaIcons } from 'react-icons/fa'
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as LoIcons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";
import * as Io4Icons from "react-icons/io";
import * as MdIcons from "react-icons/md";
function Boxgroup() {
    return (
        <div className="Supper">
            <ul>
                <li>
                    <a className="Supper__box" href="/">
                        <img className="Supper__image" src={backgr6} alt="" width="12%" height="12%" />
                        <div className="Supper__para">
                            <h4>Thinh Nguyễn Văn</h4>
                        </div>

                    </a>

                </li>
                <li>
                    <a className="Supper__box" href="/">
                        <MdIcons.MdGroup />
                        <div className="Supper__para">
                            <h4>Bạn bè</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="Supper__box" href="/">
                        <AiIcons.AiOutlineClockCircle />
                        <div className="Supper__para">
                            <h4>Kỷ niệm</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="Supper__box" href="/">
                        <RiIcons.RiTeamLine />
                        <div className="Supper__para">
                            <h4>Nhóm</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="Supper__box" href="/">
                        <AiIcons.AiOutlineShop />
                        <div className="Supper__para">
                            <h4>Marketplace</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="Supper__box" href="/">
                        <BsIcons.BsCollectionPlayFill />
                        <div className="Supper__para">
                            <h4>Watch</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="Supper__box" href="/">
                        <BsIcons.BsChevronDown />
                        <div className="Supper__para">
                            <h4>Xem thêm</h4>
                        </div>
                    </a>
                </li>
                <hr />
                <li>
                    <div>Lối tắt của bạn</div>
                </li>
                <li>
                    <a className="Supper__groupp" href="/">
                        <img className="Supper__image" src={backgr1} alt="" width="12%" height="7%" />
                        <div className="Supper__para">
                            <h4>Node.js Việt Nam</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="Supper__groupp" href="/">
                    <img className="Supper__image" src={backgr2} alt="" width="12%" height="7%" />
                        <div className="Supper__para">
                            <h4>TUYỂN DỤNG REACTJS</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="Supper__groupp" href="/">
                        <img className="Supper__image" src={backgr3} alt="" width="12%" height="7%" />
                        <div className="Supper__para">
                            <h4>Lập trình C,C++,V#,java,Python,PHP</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="Supper__groupp" href="/">
                        <img className="Supper__image" src={backgr4} alt="" width="12%" height="7%" />
                        <div className="Supper__para">
                            <h4>HIỆP KHÁCH GIANG HỒ</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="Supper__groupp" href="/">
                        <img className="Supper__image" src={backgr5} alt="" width="12%" height="7%" />
                        <div className="Supper__para">
                            <h4>Python Việt Nam</h4>
                        </div>
                    </a>
                </li>
                <li>
                    <p>Quyền riêng tư* Điều khoản * Quảng cáo* Lựa chọn
                        quảng cáo* Cookie * xem thêm * Facebook @ 2021
                    </p>
                </li>

            </ul>

        </div>
    )
}

export default Boxgroup

