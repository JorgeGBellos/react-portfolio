import React from 'react'
import CV from '../../assets/cv.pdf'
import { useTranslation } from 'react-i18next'

const CTA = () => {
  const [ t, i18n ] = useTranslation("global");

  return (
    <div className="cta">
        <a href={CV} download className='btn'>{t("header.cv")}</a>
        <a href="#contact" className='btn btn-primary'>{t("header.talk")}</a>
    </div>
  )
}

export default CTA