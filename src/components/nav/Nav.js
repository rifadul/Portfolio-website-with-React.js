import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiMessage2Fill,RiServerLine} from 'react-icons/ri'
import {FaRegCommentDots} from 'react-icons/fa'

export default function Nav() {
    const [navActive, setNavActive] = useState('')
    return (
        <nav className="nav">
        <a href={navActive} className={navActive==='#'?'active':''} onClick={(e) => setNavActive('#')}><AiOutlineHome/></a>
        <a href={navActive} className={navActive==='#about'?'active':''} onClick={(e) => setNavActive('#about')}><AiOutlineUser/></a>
        <a href={navActive} className={navActive==='#experience'?'active':''} onClick={(e) => setNavActive('#experience')}><BiBook/></a>
        <a href={navActive} className={navActive==='#service'?'active':''} onClick={(e) => setNavActive('#service')}><RiServerLine/></a>
        <a href={navActive} className={navActive==='#contact'?'active':''} onClick={(e) => setNavActive('#contact')}><RiMessage2Fill/></a>
        <a href={navActive} className={navActive==='#testimonials'?'active':''} onClick={(e) => setNavActive('#testimonials')}><FaRegCommentDots/></a>
        </nav>
    )
}
