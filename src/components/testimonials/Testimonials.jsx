import React from 'react'
import './testimonials.css'
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AVTR from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const testimonials = [
  {
    avatar:AVTR,
    name:'testimonial 1',
    review:"Loremhsadiuh ush diuashdiaduash ioashduash nasnuasdhasdniasnd asudhiuashd"
  },
  {
    avatar:AVTR2,
    name:'testimonial 2',
    review:"Loremhsadiuh ush diuashdiaduash ioashduash nasnuasdhasdniasnd asudhiuashd"
  },
  {
    avatar:AVTR3,
    name:'testimonial 3',
    review:"Loremhsadiuh ush diuashdiaduash ioashduash nasnuasdhasdniasnd asudhiuashd"
  },
  {
    avatar:AVTR4,
    name:'testimonial 4',
    review:"Loremhsadiuh ush diuashdiaduash ioashduash nasnuasdhasdniasnd asudhiuashd"
  }
]
export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          testimonials.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Client one" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
