import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import { Link } from 'react-router-dom'

export default function ProductsPage() {
  return (
    <div>
        <Link to='/'>
        <button>Main Page</button>
        </Link>
        <ProductsContainer />
    </div>
  )
}