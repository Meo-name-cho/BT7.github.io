import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import './Navbar.scss'
import bacgr from '../../assets/images/dep1.jpg'

import imageee from '../../assets/images/thinh_n.jpg'
import SubMenu from '../Barsetting/SubMenu'
import Message from '../Messages/Message.jsx'

function Navbar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    // ẩn hiện thanh setting dọc
    const [showNav, setShowNav] = useState(false)

    // ẩn hiện thanh messages dọc
    const [showMess, setShowMess] = useState(false)

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="navbar">
            {/* icon face and input seach */}
            <div className="navbar__box1">
                <FaIcons.FaFacebook />
                <div className="search">
                    <div className="searchInputs">
                        <div className="seacrchIcon">
                            {filteredData.length === 0 ? <FaIcons.FaSearch /> :
                                <GrIcons.GrClose id="clearBtn" onClick={clearInput} />}
                        </div>
                        <input type="text" placeholder={placeholder}
                            value={wordEntered} onChange={handleFilter} />


                    </div>
                    {filteredData.length != 0 && (
                        <div className="dataResults">
                            {filteredData.slice(0, 15).map((value, key) => {
                                return <a className="dataItem" href={value.link} target="_blank">
                                    <p>{value.title}</p></a>
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/*me nu home  */}
            <div className="navbar__box2">
                <ul>
                    <li><a href="/"><AiIcons.AiOutlineHome /></a></li>
                    <li><a href="/"><FaIcons.FaPlayCircle /></a></li>
                    <li><a href="/"><AiIcons.AiOutlineShop /></a></li>
                    <li><a href="/"><FaIcons.FaUsers /></a></li>
                    <li><a href="/"><FaIcons.FaUsers /></a></li>
                </ul>
            </div>
            {/* trang cá nhân và các setting */}
            <div className="navbar__box3">
                <div className="navbar__box3--user">
                    <img src={imageee} alt="" width="40%" height="44%"/>
                    <h4>Thịnh</h4>
                </div>
                {showMess && <Message/>}
                <div className="navbar__box3--icon1"><AiIcons.AiOutlineBars /></div>
                <div className="navbar__box3--icon2" id="clearBtn" onClick={()=>setShowMess(!showMess)}><FaIcons.FaFacebookMessenger /></div>
                <div className="navbar__box3--icon3"><MdIcons.MdNotificationsNone /></div>
                {showNav && <SubMenu/>}
                <div className="navbar__box3--icon4" id="clearBtn" onClick={()=>setShowNav(!showNav)}  ><AiIcons.AiOutlineCaretDown /></div>
            </div>
        </div>

    )
}

export default Navbar
