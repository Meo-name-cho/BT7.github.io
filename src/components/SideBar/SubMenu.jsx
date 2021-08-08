import React from 'react'

import './Sidebar.scss'
import bacgr from '../../assets/images/dep1.jpg'
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

function SubMenu() {
  return (
    <div className="SideBar">
      <ul>
        <li>
          <div className="SideBar__box">
            <img className="SideBar__image" src={bacgr} alt="" width="17%" height="50px"/>
            <div className="Sider__para">
              <h4 className="SideBar__h3">Thinh Nguyễn Văn</h4>   
              <a href="/">Quản lý tài khoản Google của..</a>
            </div>
            
        </div>
         
        </li>
        <hr />
        <li>
          <a href="/"><FaIcons.FaUser/> <span>Kênh của bạn</span>  </a>
        </li>
        <li>
          <a href="/"><RiIcons.RiMoneyDollarCircleFill /> <span>Giao dịch mua và gói hội viên </span> </a>
        </li>
        <li>
          <a href="/"><SiIcons.SiYoutubestudio/>YouTube Studio</a>
        </li>
        <li>
          <a href="/"><AiIcons.AiOutlineUsergroupAdd/>Chuyển đổi tài khoản</a>
        </li>
        <li>
          <a href="/"><GrIcons.GrLogin/>Đăng xuất
          </a>
        </li>
        <li>
          <a href="/"><BsIcons.BsDisplayFill/>Giao diện: Giao diện của thiết bị</a>
        </li>
        <li>
          <a href="/"><LoIcons.IoLanguageSharp/>Ngôn ngữ:Tiếng Việt</a>
        </li>
        <li>
          <a href="/"><GiIcons.GiEarthAmerica/>Địa điểm:Việt Nam</a>
        </li>
        <li>
          <a href="/"><LoIcons.IoSettings/>Cài đặt</a>
        </li>
        <li>
          <a href="/"><FaIcons.FaDatabase/>Dữ liệu của bạn trong YouTube</a>
        </li>
        <li>
          <a href="/"><Io4Icons.IoMdHelpCircle/>Trợ giúp</a>
        </li>
        <li>
          <a href="/"><RiIcons.RiMessage2Fill/>Gửi phản hồi</a>
        </li>
        <li>
          <a href="/"><FaIcons.FaKeyboard/>Phím tắt</a>
        </li>
        <hr />
        <li>
          <a href="/">Chế độ hạn chế: Đã tắt</a>
        </li>
      </ul>

    </div>
  )
}

export default SubMenu
