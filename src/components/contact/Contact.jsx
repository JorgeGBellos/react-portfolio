import React, { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const [ t, i18n ] = useTranslation("global");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c4t8e7r', 'template_im1t54f', form.current, 'b--_rDJe68wi6Wjxd')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h2>{t("contact.contact")}</h2>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder={t("contact.inputs.name")} required />
          <input type="email" name="email" placeholder={t("contact.inputs.email")} required />
          <textarea name="message" placeholder={t("contact.inputs.message")} rows="7" required ></textarea>
          <button type='submit' className='btn btn-primary'>{t("contact.inputs.submit")}</button>
        </form>
      </div>
    </section>
  )
}
