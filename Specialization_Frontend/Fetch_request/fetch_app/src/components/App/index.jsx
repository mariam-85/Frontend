import '../../style.css'
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

  const createNewProduct = product => setProducts(prev => [...prev, product]);

  const createNewUser = user => setUsers(prev => [...prev, user]);



  return (
    <div>
  <Context.Provider value={{ products, users, createNewProduct, createNewUser }}>
  <Routes>
       <Route path='/' element={<MainPage />} />
       <Route path='/users' element={<UsersPage />} />
       <Route path='/products' element={<ProductsPage />} />
  </Routes>
  </Context.Provider>
    </div>
  );
}

