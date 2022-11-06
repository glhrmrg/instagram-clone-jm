import './style.css'
import React from 'react';
import { BsList, BsInstagram, BsSearch } from 'react-icons/bs';
import { TbSquarePlus } from 'react-icons/tb';
import { AiFillHome, AiOutlineCompass, AiOutlineHeart } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';

export function Sidebar() {

    return(
        <div className="sidebar">
           <div className="insta-icon"> <a> <BsInstagram/> </a> </div>
            <a> <AiFillHome/> </a>
            <a> <BsSearch/> </a>
            <a> <AiOutlineCompass/> </a>
            <a> <RiMessengerLine/> </a>
            <a> <AiOutlineHeart/> </a>
            <a> <TbSquarePlus/> </a>
            <div className="more-icon"> <a> <BsList/> </a> </div>
            
        </div>
    )

}