import React from 'react'
import Comment from '../Comment';
import AddCommentForm from '../AddCommentForm';

export default function CommentsContainer({ comments  }) {
  return (
    <div>{

        comments.map(el => <Comment key={el.id} {...el} />)

        }

        <AddCommentForm />
    </div>
  )
}