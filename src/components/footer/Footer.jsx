import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>
        Jorge Bellos
      </a>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><FaTwitterSquare/></a>
      </div>
      <div className="footer__copyrights">
        <small>&copy; Devindev. All Rights Reserved</small>
      </div>
    </footer>
  )
}
