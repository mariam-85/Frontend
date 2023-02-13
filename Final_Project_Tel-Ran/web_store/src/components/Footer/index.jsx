import React from 'react'
import style from './index.module.css'
import icon_1 from './media/Icon_1.png';
import icon_2 from './media/Icon_2.png';


export default function Footer() {

  return (
    <footer className={['wrapper', style.main_footer].join(' ')}>

      <div className={style.footer}>

        <div className={style.contacts_block}>
                    <p>Contacts</p>
                    <h2>+ 7 999 999 99 99</h2>
                        <div className={style.messengers}>
                          <a href='"https://www.instagram.com/"'>
                          <img src={icon_1} alt="icon" />
                          </a>
                          <a href="https://www.whatsapp.com/">
                          <img src={icon_2} alt="icon" />
                        </a>
                        </div>
        </div>

          <div className={style.address}>
            <p className={style.adr}>Address</p>
            <h2>Cosmonaut City</h2>
            <h2>Cosmonauts Passage</h2>
            <p className={style.mode}>Working mode</p>
            <p className={style.hours}>24 hours a day</p>
            </div>

        </div>
          
    </footer>
  )
}