import { useState, useEffect } from 'react'
import { Context } from '../../context'
import { getProducts } from '../../requests/products';
import { getUsers } from '../../requests/users';
import UsersPage from '../../pages/UsersPage';
import ProductsPage from '../../pages/ProductsPage';
import MainPage from '../../pages/MainPage';
import { Routes, Route } from 'react-router-dom'


export default function App() {

  const [ products, setProducts ] = useState([]);

  const [ users, setUsers ] = useState([]);


  useEffect(() => {
    getProducts(setProducts)
    getUsers(setUsers)
  }, []);

  console.log(products);

  return (
    <div>
  <Context.Provider value={{ products, users }}>
  <Routes>
       <Route path='/' element={<MainPage />} />
       <Route path='/users' element={<UsersPage />} />
       <Route path='/products' element={<ProductsPage />} />
  </Routes>
  </Context.Provider>
    </div>
  );
}

