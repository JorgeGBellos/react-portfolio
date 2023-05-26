import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const projects = [
  {
    id:1,
    image:IMG1,
    title:'Luther Company - Fitness Ecommerce',
    link:'https://www.luther.mx/'
  },
  {
    id:2,
    image:IMG2,
    title:'Mitoska Shop - Fashion Ecommerce',
    link:'https://www.mitoska.shop/'
  },
  {
    id:3,
    image:IMG3,
    title:'Cierta Gente - Digital Magazine',
    link:'https://www.ciertagente.mx/'
  },
  {
    id:4,
    image:IMG1,
    title:'Nowhere - Work Spaces',
    link:'https://nowhereplazaarbol.com/'
  }
]

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

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
                <a href={link} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}
