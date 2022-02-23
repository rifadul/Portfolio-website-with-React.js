import React from 'react'
import {BsLinkedin,BsGithub,BsFacebook} from 'react-icons/bs'
export default function HeaderSocials() {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}
