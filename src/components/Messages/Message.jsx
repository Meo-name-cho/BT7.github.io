import React from 'react'

import './Mess.scss'
import bacgr from '../../assets/images/thinh_n.jpg'
// import { FaIcons } from 'react-icons/fa'
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as LoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

function Message() {
  return (
    <div className="BarMess">
      <div className="BarMess__Box">
        <div className="BarMess__box--para">
          <h2>Messenger</h2>
          
          <div className="BarMess__box__icon">
            <FaIcons.FaEllipsisH />
            <MdIcons.MdZoomOutMap />
            <BiIcons.BiVideoPlus />
            <BiIcons.BiMessageAltEdit />
          </div>
        </div>
        <input type="text" id="editinput" placeholder="tìm kiếm" />
      </div>
      <ul>
        <li>
          <a className="Setting__box" href="/">
            <img className="Setting__image" src={bacgr} alt="" width="24%" height="24%" />
            <div className="Setting__para">
              <h4>Thinh Nguyễn Văn</h4>
              <p>You:hello</p>
            </div>

          </a>
        </li>
        <li>
          <a className="Setting__box" href="/">
            <img className="Setting__image" src={bacgr} alt="" width="24%" height="24%" />
            <div className="Setting__para">
              <h4>Thinh Nguyễn Văn</h4>
              <p>You:hello</p>
            </div>

          </a>
        </li>
        <li>
          <a className="Setting__box" href="/">
            <img className="Setting__image" src={bacgr} alt="" width="24%" height="24%" />
            <div className="Setting__para">
              <h4>Thinh Nguyễn Văn</h4>
              <p>You:hello</p>
            </div>

          </a>
        </li>
        <li>
          <a className="Setting__box" href="/">
            <img className="Setting__image" src={bacgr} alt="" width="24%" height="24%" />
            <div className="Setting__para">
              <h4>Thinh Nguyễn Văn</h4>
              <p>You:hello</p>
            </div>

          </a>
        </li>
        <li>
          <a className="Setting__box" href="/">
            <img className="Setting__image" src={bacgr} alt="" width="24%" height="24%" />
            <div className="Setting__para">
              <h4>Thinh Nguyễn Văn</h4>
              <p>You:hello</p>
            </div>

          </a>
        </li>
        <li>
          <a className="Setting__box" href="/">
            <img className="Setting__image" src={bacgr} alt="" width="24%" height="24%" />
            <div className="Setting__para">
              <h4>Thinh Nguyễn Văn</h4>
              <p>You:hello</p>
            </div>

          </a>
        </li>

      </ul>

    </div>
  )
}

export default Message
