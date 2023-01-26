import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import './style.css'



export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:category" element={<ProductsPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart/" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}
