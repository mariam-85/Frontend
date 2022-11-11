import React from 'react'
import ContactsForm from '../ContactsForm'
import style from './index.module.css'
import { MobileOutlined } from '@ant-design/icons'
import { MailOutlined } from '@ant-design/icons'



export default function Contacts() {
  return (
      <section className={style.contacts_section}>
          <div className={['wrapper', style.contacts_block].join(' ')}>

              <div className={style.contacts_info}>
                  <h2>Связь с нами</h2>
                  <p>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
                  <div className={style.phone_and_mail}>
                      <p><MobileOutlined /> +7 (111) 222-33-44</p>
                      <p><MailOutlined /> order@bu-one.ru</p>
                  </div>
              </div>

              <ContactsForm />
          </div>

      </section>
    
  )
}
