import React, {useEffect, useState } from 'react'
import { getCategories } from '../../requests/categories'

export default function Categories() {

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    getCategories(setCategories)
  }, []);

  console.log(categories);

  return (
    <div>Category</div>
  )
}
