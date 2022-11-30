import { getUsers } from '../../requests/users'
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import { getProducts } from '../../requests/products';
import UsersPage from '../../pages/UsersPage';
import ProductsPage from '../../pages/ProductsPage';
import MainPage from '../../pages/MainPage';
import Nav from '../Nav';
import { Routes, Route } from 'react-router-dom'

export default function App() {

  const [ users, setUsers ] = useState([]);

  const [ products, setProducts ] = useState([]);


  useEffect(() => {
    getUsers(setUsers)
    getProducts(setProducts)
  }, []); // функция вызывается один раз при перезагрузке страницы

  // getUsers(setUsers) - функция вызывается много раз


  return (
    <div>
  <Context.Provider value={{ users, products }}>
        <Nav />
     <Routes>
       <Route path='/' element={<MainPage />} />
       <Route path='/users' element={<UsersPage />} />
       <Route path='/products' element={<ProductsPage />} />
     </Routes>
  </Context.Provider>
    </div>
  );
}


