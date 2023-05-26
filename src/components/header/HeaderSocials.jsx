import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {TbWorldWww} from 'react-icons/tb'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jorgeagb/" target='blank'>
            <AiFillLinkedin/>
        </a>
        <a href="https://github.com/JorgeGBellos" target='blank'>
            <AiFillGithub/>
        </a>
        <a href="https://ciertagente.mx/" target='blank'>
            <TbWorldWww/>
        </a>
    </div>
  )
}

export default HeaderSocials