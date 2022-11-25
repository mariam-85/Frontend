import React, { useContext } from 'react'
// import style from './index.module.css'


export default function AddCommentForm() {
  
    const submit = event => {
        event.preventDefault();
        const { comment } = event.target;
        console.log(comment.value);
        comment.value = '';
    }



  return (
    <form onSubmit={submit}>
        <input type="text" name='comment' placeholder='Your comment' />
        <button>Add comment</button>
    </form>
  )
}