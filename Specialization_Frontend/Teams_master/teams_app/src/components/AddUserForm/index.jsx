import React from 'react'
import style from './index.module.css'

export default function AddUserForm() {

    const submit_form = event => {
        event.preventDefault();
        const { user_title } = event.target;
        console.log(user_title.value);
        user_title.value = '';
    }
    
      return (
        <form className={style.add_user_form} onSubmit={submit_form}>
            <p>Add user</p>
            <input type="text" name='user_title' placeholder='User´s title' />
            <button>Add user</button>
        </form>
      )
    }

