import React from 'react'
import './services.css'
import{BiCheck} from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

export const Services = () => {
  const [ t, i18n ] = useTranslation("global");

  return (
    <section id="services">
      <h5>{t("services.offer")}</h5>
      <h2>{t("services.services")}</h2>
      
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>{t("services.service1.title")}</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service1.feature")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service1.feature2")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service1.feature3")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service1.feature4")}</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>{t("services.service2.title")}</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service2.feature")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service2.feature2")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service2.feature3")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service2.feature4")}</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>{t("services.service3.title")}</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service3.feature")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service3.feature2")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service3.feature3")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("services.service3.feature4")}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
