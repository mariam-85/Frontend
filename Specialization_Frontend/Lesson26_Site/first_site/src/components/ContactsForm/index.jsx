import React from 'react'
import style from './index.module.css'
import { useForm } from 'react-hook-form'

export default function ContactsForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });

    const submit = data => console.log(data);

    const firstnameRegister = register('firstname', {
        required: '*The field "firstname" is required'
   });

      const lastnameRegister = register('lastname', {
        required: '*The field "lastname" is required'

      });

      const messageRegister = register('message', {
        required: '*The field "message" is required'
      });

  return (
      <div>
    <form onSubmit={handleSubmit(submit)} className={style.contacts_form}>

            <div className={style.firstname_lastname}>
        <label>
            <p>Имя</p>
            <input 
             type="text"  
             name='Имя' 
             placeholder='Иван' 
             {...firstnameRegister}/>
        </label>

        <label>
            <p>Фамилия</p>
            <input 
             type="text"  
             name='Фамилия' 
             placeholder='Иванов' 
             {...lastnameRegister}/>
        </label>
        </div>

        <label>
            <p>Сообщение</p>
            <textarea 
            type="text"  
            name='Сообщение' 
            placeholder='Ваше сообщение' 
            {...messageRegister}/>

        </label>

        <button>Отправить сообщение</button>
    </form>
<div className={style.error_message}>
{errors.firstname && <p>{errors.firstname?.message}</p>}
{errors.lastname && <p>{errors.lastname?.message}</p>}
{errors.message && <p>{errors.message?.message}</p>}

 </div>
</div>
    )
    }
