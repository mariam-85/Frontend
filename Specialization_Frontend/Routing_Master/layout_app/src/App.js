import Main from './pages/Main';
import About from './pages/About';
import Categories from './pages/Categories';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import './style.css'
import Products from './pages/Products';
import ProductDescr from './pages/ProductDescr';

export default function App() {

  return (
    <div>
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='categories' element={<Categories />} />
          <Route path='categories/:category' element={<Products />} />
          <Route path='product/:id' element={<ProductDescr />} />
        </Route>
     </Routes>
    </div>
  );
}