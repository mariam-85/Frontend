import React from 'react'
import style from './index.module.css'
import icon_1 from './media/Icon_1.png';
import icon_2 from './media/Icon_2.png';


export default function Footer() {

  return (
    <footer className={style.footer}>

      <section className={style.contacts}>

        <div className={style.contacts_block}>
          <div className={style.contact}>
                  <div className={style.phone}>
                    <p>Contacts</p>
                    <h2>+ 7 999 999 99 99</h2>
                  </div>
                        <div className={style.messangers}>
                          <div className={style.instagram}>
                          <img src={icon_1} alt="icon" />
                          <p>Instagram</p>
                          </div>
                          <div className={style.whatsapp}>
                          <img src={icon_2} alt="icon" />
                          <p>WhatsApp</p>
                        </div>
          </div>
        </div>

          <div className={style.address}>
            <h2>Address</h2>
            <div className={style.city_name}>
            <h2>Cosmonaut City</h2>
            <p>Cosmonauts Passage</p>
            </div>
            <div className={style.working_mode}>
            <p className={style.mode}>Working mode</p>
            <p className={style.hours}>24 hours a day</p>
            </div>
          </div>

        </div>
      </section>

    </footer>
  )
}
