import React, { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c4t8e7r', 'template_im1t54f', form.current, 'b--_rDJe68wi6Wjxd')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full name" required />
          <input type="email" name="email" placeholder='Email' required />
          <textarea name="message" placeholder="Tell me about your idea!" rows="7" required ></textarea>
          <button type='submit' className='btn btn-primary'>Contact me!</button>
        </form>
      </div>
    </section>
  )
}
