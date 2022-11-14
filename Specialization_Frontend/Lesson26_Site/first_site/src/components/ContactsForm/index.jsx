import React from 'react'
import style from './index.module.css'

export default function ContactsForm() {
  return (
    <form className={style.contacts_form}>

            <div className={style.firstname_lastname}>
        <label>
            <p>Имя</p>
            <input type="text"  name='Имя' placeholder='Иван'/>
        </label>

        <label>
            <p>Фамилия</p>
            <input type="text"  name='Фамилия' placeholder='Иванов'/>
        </label>
        </div>

        <label>
            <p>Сообщение</p>
            <textarea type="text"  name='Сообщение' placeholder='Ваше сообщение'/>

        </label>

        <button>Отправить сообщение</button>
    </form>
    )
    }
