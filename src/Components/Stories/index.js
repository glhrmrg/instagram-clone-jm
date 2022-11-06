import React, { useState } from 'react'
import jetiLogo from './Img/jetLogo.jpg';
import guiLogo from './Img/guiLogo.jpg';
import tsLogo from './Img/tsLogo.jpg';
import lordeLogo from './Img/lordeLogo.jpg';
import ufsmLogo from './Img/ufsmLogo.jpg';
import jetStories from './Img/storiesJetmob.jpg';
import guiStories from './Img/storiesGui.jpeg';
import tsStories from './Img/storiesTaylor.jpg';
import ufsmStories from './Img/storiesUfsm.jpeg';
import lordeStories from './Img/storiesLorde.jpg';
import { AiOutlineHeart } from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'
import './style.css';

export function Stories() {

    //retorna stories jet.office
    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
        setPopup(!popup)
    }

    //retorna stories glhrmrg
    const [popup2, setPopup2] = useState(false)

    const togglePopup2 = () => {
        setPopup2(!popup2)
    }

    //retorna stories taylorswift
    const [popup3, setPopup3] = useState(false)

    const togglePopup3 = () => {
        setPopup3(!popup3)
    }

    //retorna stories ufsm.br
    const [popup4, setPopup4] = useState(false)

    const togglePopup4 = () => {
        setPopup4(!popup4)
    }

    //retorna stories lorde
    const [popup5, setPopup5] = useState(false)

    const togglePopup5 = () => {
        setPopup5(!popup5)
    }

    return (
        <div className="stories-box">
            <ul className="stories-circles">
                <li className="user1">
                <img onClick={togglePopup} className="stories-pic" src={jetiLogo} alt="Logo" />
                    <p>Seu story</p>

                {popup && (
                    <div className="popup">
                    <div onClick={togglePopup} className="opaque-overlay"></div>
                    <div className="popup-content">
                    <div className="stories-info">
                        <img className="stories-popup-pic" src={jetiLogo} alt="Logo" />
                        <p className="stories-popup-user">Seu story</p>
                    </div>
                        <img className="stories-popup" src={jetStories} alt="StoriesPost1" />
                        <div className="stories-btns">
                        <AiOutlineHeart className='heart-btn'/>
                        <FiSend className='send-btn'/>
                        </div>
                    </div>
                </div>
                )}

                </li>
                
                <li className="user1">
                <img onClick={togglePopup2} className="stories-pic" src={guiLogo} alt="Logo2" />
                    <p>glhrmrg</p>

                    {popup2 && (
                    <div className="popup">
                    <div onClick={togglePopup2} className="opaque-overlay"></div>
                    <div className="popup-content">
                    <div className="stories-info">
                        <img className="stories-popup-pic" src={guiLogo} alt="Logo" />
                        <p className="stories-popup-user">glhrmrg</p>
                    </div>
                        <img className="stories-popup" src={guiStories} alt="StoriesPost1" />
                        <div className="stories-btns">
                        <AiOutlineHeart className='heart-btn'/>
                        <FiSend className='send-btn'/>
                        </div>
                    </div>
                </div>
                )}
                </li>

                <li className="user1">
                <img onClick={togglePopup3} className="stories-pic" src={tsLogo} alt="Logo2" />
                    <p>taylorswift</p>
                    {popup3 && (
                    <div className="popup">
                    <div onClick={togglePopup3} className="opaque-overlay"></div>
                    <div className="popup-content">
                    <div className="stories-info">
                        <img className="stories-popup-pic" src={tsLogo} alt="Logo" />
                        <p className="stories-popup-user">taylorswift</p>
                    </div>
                        <img className="stories-popup" src={tsStories} alt="StoriesPost1" />
                        <div className="stories-btns">
                        <AiOutlineHeart className='heart-btn'/>
                        <FiSend className='send-btn'/>
                        </div>
                    </div>
                </div>
                )}
                </li>

                <li className="user1">
                <img onClick={togglePopup4} className="stories-pic" src={ufsmLogo} alt="Logo2" />
                    <p>ufsm.br</p>
                    {popup4 && (
                    <div className="popup">
                    <div onClick={togglePopup4} className="opaque-overlay"></div>
                    <div className="popup-content">
                    <div className="stories-info">
                        <img className="stories-popup-pic" src={ufsmLogo} alt="Logo" />
                        <p className="stories-popup-user">ufsm.br</p>
                    </div>
                        <img className="stories-popup" src={ufsmStories} alt="StoriesPost1" />
                        <div className="stories-btns">
                        <AiOutlineHeart className='heart-btn'/>
                        <FiSend className='send-btn'/>
                        </div>
                    </div>
                </div>
                )}
                </li>

                <li className="user1">
                <img onClick={togglePopup5} className="stories-pic" src={lordeLogo} alt="Logo2" />
                    <p>lorde</p>
                    {popup5 && (
                    <div className="popup">
                    <div onClick={togglePopup5} className="opaque-overlay"></div>
                    <div className="popup-content">
                    <div className="stories-info">
                        <img className="stories-popup-pic" src={lordeLogo} alt="Logo" />
                        <p className="stories-popup-user">lorde</p>
                    </div>
                        <img className="stories-popup" src={lordeStories} alt="StoriesPost1" />
                        <div className="stories-btns">
                        <AiOutlineHeart className='heart-btn'/>
                        <FiSend className='send-btn'/>
                        </div>
                    </div>
                </div>
                )}
                </li>
            </ul>
        </div>

    )

};