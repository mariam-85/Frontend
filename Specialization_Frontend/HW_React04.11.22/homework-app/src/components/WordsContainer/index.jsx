import React from 'react'
import Word from '../Word';
import style from './index.module.css'


export default function WordsContainer({ words }) {
  return (
    <div className={style.words_container}>
        {
            words.map(el => <Word key={el.id} {...el} />)
        }
    </div>
  )
}
