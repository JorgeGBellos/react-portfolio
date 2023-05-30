import React from 'react'
import './footer.css'
import {TbWorldWww} from 'react-icons/tb'
import {FaInstagram} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>
        Jorge Bellos
      </a>
      <div className="footer__socials">
        <a href="https://ciertagente.mx/"><TbWorldWww/></a>
        <a href="https://www.instagram.com/jorgegbellos/"><FaInstagram/></a>
        <a href="https://github.com/JorgeGBellos"><AiFillGithub/></a>
      </div>
      <div className="footer__copyrights">
        <small>&copy; Devindev. All Rights Reserved</small>
      </div>
    </footer>
  )
}
