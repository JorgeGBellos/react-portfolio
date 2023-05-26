import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>
        Dev in dev
      </a>
      <ul className='permalinks'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
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
