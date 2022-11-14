import React from 'react'
import style from './index.module.css'

export default function ContactsForm() {
  return (
    <form className={style.contacts_form}>

            <div className={style.firstname_lastname}>
        <label>
            <p>Name</p>
            <input type="text"  name='firstname' placeholder='Ivan'/>
        </label>

        <label>
            <p>Family name</p>
            <input type="text"  name='lastname' placeholder='Ivanov'/>
        </label>
        </div>

        <label>
            <p>Message</p>
            <textarea type="text"  name='message' placeholder='Your message'/>

        </label>

        <button>Send message</button>
    </form>
    )
    }
