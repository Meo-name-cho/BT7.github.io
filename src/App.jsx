import React from 'react'
import CardUI from './components/Home/CardUI'
import './App.scss'

import * as FaIcons from "react-icons/fa";

import Navbar from './components/Navbar/Navbar'
import BoxTokyo from './components/BoxTokyo/BoxTokyo'
import BoxThinhhanh from './components/BoxThinhhanh/BoxThinh_hanh'

import Data from './Data.json'

import bacground from './assets/images/dep1.jpg'
function App() {
    var listImage = [
        {
            title: "Quách thị Lan nè nỗ lực tuyệt vời để có mặt ở bán kết...",
            para: "HTV Sports ",
            date: "439 N lượt xem . 1 tuần trước",
            Image: bacground,
        },
        {
            title: "không tận dụng được cơ hội, Phi Vũ Sớm bị loại...",
            para: "HTV Sports",
            date: "77 N lượt xem . 1 tuần trước",
            Image: bacground,
        },
        {
            title: "Đội tuyển bơi Trung Quốc thẻ hiện sức mạnh ...",
            para: "HTV Sports",
            date: "121 N lượt xem . 1 tuần trước",
            Image: bacground,
        },
        {
            title: "'Quả ngọt' thứ hai của 'hoa khôi cầu lông'....",
            para: "HTV Sports",
            date: "541 N lượt xem . 1 tuần trước",
            Image: bacground,
        },

    ]
    var ListPopular = [
        {
            title: "3107-3 | W/n x Nâu x Duongg X Titie | OFFICAL MV ",
            Subrice: "SUBSCRIBE CHANEL: HTTPS://DASMKFSMVNLJKDS/VLSKDNV.M,ZXCNV/N Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minima, asperiores reprehenderit architecto,laudantium laboriosam aut possimus nihil explicabo modi commodi facilis omnis, vero officiis adipisci nobis perspiciatis dolores nemo.",
            date: "W/n 8,2 Tr lượt xem . 6 ngày trước",
            Image: bacground,
        },
        {
            title: "SAI CÁCH YÊU | lÊ BẢO BÌNH | OFFICIAL MUSIC VIDEO",
            Subrice: "SAI CÁCH YÊU | LÊ BẢO BÌNH | OFFICIAL MUSIC VIDEOO Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minima, asperiores reprehenderit architecto,laudantium laboriosam aut possimus nihil explicabo modi commodi facilis omnis, vero officiis adipisci nobis perspiciatis dolores nemo.",
            date: "Lê Bảo Bình 11 Tr lượt xem . 1 tuần trước",
            Image: bacground,
        },
    ]
    let element = listImage.map((list, index) => {
        return <BoxTokyo title={list.title}
            para={list.para}
            date={list.date}
            Image={list.Image}
        />
    })
    let Popular = ListPopular.map((list, index) => {
        return <BoxThinhhanh title={list.title}
            Subrice={list.Subrice}
            date={list.date}
            Image={list.Image}
        />
    })

    return (
        <div className="App" >
            <div className="App__box">
                <Navbar placeholder="Tìm Kiếm" data={Data}/>
                <CardUI />
                <div className="title">
                    <FaIcons.FaMedal fontSize="30px" />
                    <h3>Thế vận hội ToKyo 2020</h3>
                </div>
                <div className="EditTokyo">
                    <div className="Edit__box">
                        {element}
                   
                    </div>
                    <hr />
                </div>
                <div className="EditPopular">
                    {Popular}
                    <hr />
                </div>

            </div>

        </div>
    )
}

export default App

