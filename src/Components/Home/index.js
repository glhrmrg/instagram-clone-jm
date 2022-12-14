import React, { useState } from 'react'
import './style.css'
import post1 from './Imgs/post1.png'
import post2 from './Imgs/post2.png'
import post3 from './Imgs/post3.png'
import post4 from './Imgs/post4.jpg'
import post5 from './Imgs/post5.png'
import jetiLogo from '../Stories/Img/jetLogo.jpg'
import progradLogo from '../Stories/Img/progradLogo.jpg'
import tsLogo from '../Stories/Img/tsLogo.jpg'
import ufsmLogo from '../Stories/Img/ufsmLogo.jpg'
import ruLogo from '../Stories/Img/ruLogo.jpg'
import { AiOutlineHeart } from 'react-icons/ai'
import {BsChat} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'
import { Sidebar } from '../Sidebar'
import { Stories } from '../Stories'

export function Home() {

    const [likes, setLikes] = useState(100)
    const [likes2, setLikes2] = useState(5750)
    const [likes3, setLikes3] = useState(250)
    const [likes4, setLikes4] = useState(1800)
    const [likes5, setLikes5] = useState(750)

    const [liked, setLikedActive] = useState(false)
    const [liked2, setLikedActive2] = useState(false)
    const [liked3, setLikedActive3] = useState(false)
    const [liked4, setLikedActive4] = useState(false)
    const [liked5, setLikedActive5] = useState(false)

    //retorna like do 1 post
    function like() {
        if (liked) {
            setLikedActive(false)
            setLikes(likes-1)
        }else{
            setLikedActive(true)
            setLikes(likes+1)
        }
    }

    //retorna like do 2 post
    function like2() {
        if (liked2) {
            setLikedActive2(false)
            setLikes2(likes2-1)
        }else{
            setLikedActive2(true)
            setLikes2(likes2+1)
        }
    }

    //retorna like do 3 post
    function like3() {
        if (liked3) {
            setLikedActive3(false)
            setLikes3(likes3-1)
        }else{
            setLikedActive3(true)
            setLikes3(likes3+1)
        }
    }

    //retorna like do 4 post
    function like4() {
        if (liked4) {
            setLikedActive4(false)
            setLikes4(likes4-1)
        }else{
            setLikedActive4(true)
            setLikes4(likes4+1)
        }
    }

    //retorna like do 5 post
    function like5() {
        if (liked5) {
            setLikedActive5(false)
            setLikes5(likes5-1)
        }else{
            setLikedActive5(true)
            setLikes5(likes5+1)
        }
    }

    //retorna comentarios do 1 post
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const submitClick = () => {
        setComments((comments) => [...comments, comment])
    }

    const onChange = (e) => {
        setComment(e.target.value);
    };

    //retorna comentarios do 2 post
    const [comments2, setComments2] = useState([]);
    const [comment2, setComment2] = useState("");

    const submitClick2 = () => {
        setComments2((comments2) => [...comments2, comment2])
    }

    const onChange2 = (e) => {
        setComment2(e.target.value);
    };

    //retorna comentarios do 3 post
    const [comments3, setComments3] = useState([]);
    const [comment3, setComment3] = useState("");

    const submitClick3 = () => {
        setComments3((comments3) => [...comments3, comment3])
    }

    const onChange3 = (e) => {
        setComment3(e.target.value);
    };

    //retorna comentarios do 4 post
    const [comments4, setComments4] = useState([]);
    const [comment4, setComment4] = useState("");

    const submitClick4 = () => {
        setComments4((comments4) => [...comments4, comment4])
    }

    const onChange4 = (e) => {
        setComment4(e.target.value);
    };

    //retorna comentarios do 5 post
    const [comments5, setComments5] = useState([]);
    const [comment5, setComment5] = useState("");

    const submitClick5 = () => {
        setComments5((comments5) => [...comments5, comment5])
    }

    const onChange5 = (e) => {
        setComment5(e.target.value);
    };



    return(
        <div className="home-box">
            <Sidebar/>
            <Stories/>
        <div className="feed">
            <ul className="posts">
                <li className="post1">
                    <img className="post-profile-pic" src={jetiLogo} align="left" alt="Profile1" />
                    <p className="post-profile-name">jet.office</p>
                    <img className= "post" src={post1}  alt="Post1" />
                    <AiOutlineHeart className='heart-btn' onClick={like}/>
                    <BsChat className='comment-btn'/>
                    <FiSend className='send-btn'/>
                    <p className='likes-by'>Curtido por: <strong>{likes}</strong> pessoas</p>
                    <p className='pic-description'> <strong>jet.office</strong>: Se voc?? est?? passando por conflitos no momento de vender im??veis para diferentes gera????es, 
                    saiba que voc?? n??o est?? sozinho. </p>

                    {comments.map((text) => (
                        <div className='comment'><strong>jet.office:</strong> {text}</div>
                    ))}

                    <textarea value = {comment} onChange={onChange} className="input-box" placeholder="Adicione um coment??rio"/>
                    <button onClick={submitClick} className="input-btn">Publicar</button>

                </li>

                <li className="post2">
                    <img className="post-profile-pic" src={tsLogo} align="left" alt="Profile2" />
                    <p className="post-profile-name">taylorswift</p>
                    <img className= "post" src={post2}  alt="Post1" />
                    <AiOutlineHeart className='heart-btn' onClick={like2}/>
                    <BsChat className='comment-btn'/>
                    <FiSend className='send-btn'/>
                    <p className='likes-by'>Curtido por: <strong>{likes2}</strong> pessoas</p>
                    <p className='pic-description'> <strong>taylorswift</strong>: Im enchanted to announce my next tour: 
                    Taylor Swift | The Eras Tour, a journey through the musical eras of my career. </p>
                    
                    {comments2.map((text) => (
                        <div className='comment'><strong>jet.office:</strong> {text}</div>
                    ))}

                    <textarea value = {comment2} onChange={onChange2} className="input-box" placeholder="Adicione um coment??rio"/>
                    <button onClick={submitClick2} className="input-btn">Publicar</button>
                </li>

                <li className="post3">
                    <img className="post-profile-pic" src={ufsmLogo} align="left" alt="Profile1" />
                    <p className="post-profile-name">ufsm.br</p>
                    <img className= "post" src={post3}  alt="Post1" />
                    <AiOutlineHeart className='heart-btn' onClick={like3}/>
                    <BsChat className='comment-btn'/>
                    <FiSend className='send-btn'/>
                    <p className='likes-by'>Curtido por: <strong>{likes3}</strong> pessoas</p>
                    <p className='pic-description'> <strong>ufsm.br</strong>: Inscri????es abertas, at?? dia 04/11, para sele????o de Ingresso/Reingresso em Cursos de Gradua????o EAD da UFSM </p>
                    
                    {comments3.map((text) => (
                        <div className='comment'><strong>jet.office:</strong> {text}</div>
                    ))}
                    
                    <textarea value = {comment3} onChange={onChange3} className="input-box" placeholder="Adicione um coment??rio"/>
                    <button onClick={submitClick3} className="input-btn">Publicar</button>
                    
                </li>

                <li className="post4">
                    <img className="post-profile-pic" src={progradLogo} align="left" alt="Profile1" />
                    <p className="post-profile-name">progradufsm</p>
                    <img className= "post" src={post4}  alt="Post1" />
                    <AiOutlineHeart className='heart-btn' onClick={like4}/>
                    <BsChat className='comment-btn'/>
                    <FiSend className='send-btn'/>
                    <p className='likes-by'>Curtido por: <strong>{likes4}</strong> pessoas</p>
                    <p className='pic-description'> <strong>progradufsm</strong>:  Inscri????es at?? 6/11 no Teste de Sufici??ncia em Leitura em L??ngua Estrangeira. </p>
                    
                    {comments4.map((text) => (
                        <div className='comment'><strong>jet.office:</strong> {text}</div>
                    ))}
                    
                    <textarea value = {comment4} onChange={onChange4} className="input-box" placeholder="Adicione um coment??rio"/>
                    <button onClick={submitClick4} className="input-btn">Publicar</button>
                </li>

                <li className="post5">
                    <img className="post-profile-pic" src={ruLogo} align="left" alt="Profile1" />
                    <p className="post-profile-name">ru.ufsm.br</p>
                    <img className= "post" src={post5}  alt="Post1" />
                    <AiOutlineHeart className='heart-btn' onClick={like5}/>
                    <BsChat className='comment-btn'/>
                    <FiSend className='send-btn'/>
                    <p className='likes-by'>Curtido por: <strong>{likes5}</strong> pessoas</p>
                    <p className='pic-description'> <strong>ru.ufsm.br</strong>: Al??, al?? UFSMer da CEU!
                    O agendamento do kit de distribui????o vai at?? ??s 11:00 de amanh??, n??o vai perder o prazo, ein! </p>
                    
                    {comments5.map((text) => (
                        <div className='comment'><strong>jet.office:</strong> {text}</div>
                    ))}

                    <textarea value = {comment5} onChange={onChange5} className="input-box" placeholder="Adicione um coment??rio"/>
                    <button onClick={submitClick5} className="input-btn">Publicar</button>
                    
                </li>
            </ul>
        </div>
        </div>
    )
}
