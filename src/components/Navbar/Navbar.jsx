import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import './Navbar.scss'
import bacgr from '../../assets/images/dep1.jpg'


import SubMenu from '../SideBar/SubMenu'

function Navbar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    // ẩn hiện thanh menu dọc
    const [showNav,setShowNav]=useState(false)
    const [showBg,setShowBg]=useState()

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

        <div className="Home__Room1">
            <div className="Home__box">
                <div className="Home__menu">
                    <div className="nav">
                        <div className="search">
                            <div className="searchInputs">
                                <input type="text" placeholder={placeholder} 
                                value={wordEntered} onChange={handleFilter} />
                                <div className="seacrchIcon">
                                    {filteredData.length === 0 ? < FaIcons.FaKeyboard /> :
                                        <GrIcons.GrClose id="clearBtn" onClick={clearInput} />}

                                </div>
                                <button className="ButtonIcon1"><FaIcons.FaSearch /></button>
                                <div className="ButtonIcon2"><FaIcons.FaMicrophoneAlt /></div>
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
                </div>
                <div className="Home__button">
                    {showNav && <SubMenu/>}
                    <div className="Button__v"> <FaIcons.FaVideo id="clearBtn"/></div>
                    <div className="Button__v"> <FaIcons.FaBars id="clearBtn" onClick={()=>setShowBg(!showBg)}/></div>
                    {showBg && <div className="overlay"></div>}
                    <div className="Button__v"> <GrIcons.GrNotification id="clearBtn"/></div>
                    <div className="Button__v" id="clearBtn" onClick={()=>setShowNav(!showNav)} >
                    <img className="SideBar__image" src={bacgr} alt="" width="100%" height="50px"/>
                    </div>
                </div>
            </div>

        </div>
    
    )
}

export default Navbar
