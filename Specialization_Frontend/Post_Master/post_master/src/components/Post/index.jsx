import React, { useContext} from 'react'
import style from './index.module.css'
import { Context } from '../../context';
import CommentsContainer from '../CommentsContainer';


export default function Post({ id, title, text, like, comments }) {

  const { change_like } = useContext(Context);

  const like_or_not = like ? 'Liked' : 'Like?';

  const like_style = [style.like_btn, like ? style.like_btn_active : ''].join(' ')



  return (

    <div className={style.post_item}>

      <p>{ title }</p>
      <p>{ text }</p>
      <p 
      className={like_style} 
      onClick={() => change_like(id)}
      >
        { like_or_not }
        </p>
        <CommentsContainer comments={comments}/>

    </div>
  )
}
