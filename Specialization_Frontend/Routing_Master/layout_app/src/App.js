import Main from './pages/Main';
import About from './pages/About';
import Categories from './pages/Categories';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import './style.css'

export default function App() {

  return (
    <div>
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<Categories />} />
        </Route>
     </Routes>
    </div>
  );
}