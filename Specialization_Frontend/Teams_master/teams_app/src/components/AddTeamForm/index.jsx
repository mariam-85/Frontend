import React from 'react'
import style from './index.module.css'

export default function AddTeamForm() {

const submit_form = event => {
    event.preventDefault();
    const { team_title } = event.target;
    console.log(team_title.value);
    team_title.value = '';
}

  return (
    <form className={style.add_team_form} onSubmit={submit_form}>
        <p>Add team</p>
        <input type="text" name='team_title' placeholder='Team´s title' />
        <button>Add team</button>
    </form>
  )
}
