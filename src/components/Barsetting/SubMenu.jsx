import React from 'react'

import './Sidebar.scss'
import bacgr from '../../assets/images/thinh_n.jpg'
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

function SubMenu() {
  return (
    <div className="Setting">
      <ul>
        <li>
          <a className="Setting__box" href="/">
            <img className="Setting__image" src={bacgr} alt="" width="18%" height="18%" />
            <div className="Setting__para">
              <h4>Thinh Nguyễn Văn</h4>
              <p>Xem trang cá nhân của bạn</p>
            </div>

          </a>
        </li>
        <hr />
        <li>
          <a className="Setting__box" href="/">
            <img className="Setting__image" src={bacgr} alt="" width="13%" height="13%" />
            <div className="Setting__para">
              <h4>Đóng góp ý kiến</h4>
              <p>Góp phần cả thiện phiên bản facebook mới.</p>
            </div>

          </a>
        </li>
        <li>
          <a className="Setting__box" href="/">
            <MdIcons.MdGroup />
            <div className="Setting__para">
              <h4>Cài đặt và quyền riêng tư</h4>
            </div>
          </a>
        </li>
        <li>
          <a className="Setting__box" href="/">
            <AiIcons.AiOutlineClockCircle />
            <div className="Setting__para">
              <h4>Trợ giúp và hỗ trợ</h4>
            </div>
          </a>
        </li>
        <li>
          <a className="Setting__box" href="/">
            <RiIcons.RiTeamLine />
            <div className="Setting__para">
              <h4>Màn hình và trợ năng</h4>
            </div>
          </a>
        </li>
        <li>
          <a className="Setting__box" href="/">
            <AiIcons.AiOutlineShop />
            <div className="Setting__para">
              <h4>Đăng xuất</h4>
            </div>
          </a>
        </li>
        <hr />
        <li>
          <p>Quyền riêng tư* Điều khoản * Quảng cáo* Lựa chọn
            quảng cáo* Cookie * xem thêm * Facebook @ 2021
          </p>
        </li>
      </ul>
    </div>
  )
}

export default SubMenu
