import PostsContainer from "../PostsContainer";
import { useState } from 'react'
import { posts_data } from '../../data/posts'
import { Context } from '../../context'
import AddPostForm from "../AddPostForm";

export default function App() {

  const [ posts, setPosts ] = useState(posts_data);

  const change_like = (id) => {
    // Найти карточку по айди - метод find()
    const target_card = posts.find(el => el.id === id);

    // У найденной карточки меняем значение свойства like на противоположное
    target_card.like = !target_card.like;

    // Отследить изменение состояния (setPosts)
    setPosts([...posts]);
  }

    // Из собранных данных формировать новый пост

  const add_post = (title_value, text_value) => {
    setPosts([...posts, {
      id: Date.now(),
      title: title_value,
      text: text_value,
      like: false,
      comments: []
    }])
  }


  return (
    <div>
      <Context.Provider value={{ posts, change_like, add_post }}>
        <AddPostForm />
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}


