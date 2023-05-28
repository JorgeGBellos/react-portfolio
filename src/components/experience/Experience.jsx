import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

export const Experience = () => {
  const [ t, i18n ] = useTranslation("global");

  return (
    <section id="experience">
      <h5>{t("experience.skillsIHave")}</h5>
      <h2>{t("experience.myExperience")}</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t("experience.frontend")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>{t("experience.intermediate")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>jQuery</h4>
                <small className='text-light'>{t("experience.intermediate")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>{t("experience.intermediate")}</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>{t("experience.backend")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CodeIgniter</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>{t("experience.intermediate")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>{t("experience.intermediate")}</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__other">
          <h3>{t("experience.otherTechs")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>WordPress</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Shopify</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Zapier</h4>
                <small className='text-light'>{t("experience.intermediate")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>{t("experience.intermediate")}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
