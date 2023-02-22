import React, {useEffect, useState } from 'react'
import { getCategories } from '../../requests/categories'
import CategoryCard from '../../components/CategoryCard';
import style from './index.module.css'

export default function Categories() {

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    getCategories(setCategories)
  }, []);

  return (
    <div className={style.categories}>
    {
    categories.length === 0 
    ? <p>Categories are loading...</p>
    : <div >
      {
      categories.map(el => <CategoryCard key={el} category={el} />)
      }
    </div>
}
    </div>
  )
}
