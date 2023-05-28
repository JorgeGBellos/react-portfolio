import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BiAward} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolder} from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

export const About = () => {
  const [ t, i18n ] = useTranslation("global");

  return (
    <section id="about">
      <h5>{t("about.getToKnow")}</h5>
      <h2>{t("about.aboutMe")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className='about__icon'/>
              <h5>{t("about.experience")}</h5>
              <small>{t("about.experienceText")}</small>
            </article>
            
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>{t("about.clients")}</h5>
              <small>{t("about.clientsText")}</small>
            </article>

            <article className="about__card">
              <AiOutlineFolder className='about__icon'/>
              <h5>{t("about.projects")}</h5>
              <small>{t("about.projectsText")}</small>
            </article>
          </div>
          <p>
            {t("about.aboutText")}
          </p>
          <a href="#contact" className='btn btn-primary'>{t("about.talk")}</a>
        </div>
      </div>
    </section>
  )
}
