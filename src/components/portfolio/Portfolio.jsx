import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import { useTranslation } from 'react-i18next'

const projects = [
  {
    id:1,
    image:IMG2,
    title:'Luther Company - Fitness Ecommerce',
    link:'https://www.luther.mx/'
  },
  {
    id:2,
    image:IMG1,
    title:'Mitoska Shop - Fashion Ecommerce',
    link:'https://www.mitoska.shop/'
  },
  {
    id:3,
    image:IMG3,
    title:'Cierta Gente - Digital Magazine',
    link:'https://www.ciertagente.mx/'
  }
]

export const Portfolio = () => {
  const [ t, i18n ] = useTranslation("global");

  return (
    <section id="portfolio">
      <h5>{t("portfolio.recentWork")}</h5>
      <h2>{t("portfolio.portfolio")}</h2>

      <div className="container portfolio__container">
        {
          projects.map(({id,image,title,link})=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt="Luther Company" />
              </div>
              <h3>
                {title}
              </h3>
              <div className="portfolio__item-cta">
                <a href={link} className='btn btn-primary' target='_blank'>{t("portfolio.visit")}</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}
