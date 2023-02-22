import FruitsPage from '../../pages/FruitsPage';
import VegetablesPage from '../../pages/VegetablesPage';
import Nav from '../Nav';
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from '../../pages/NotFoundPage';
import  HomePage from '../../pages/HomePage';

export default function App() {

  return (

<div>

     <Nav />
     <Routes>
       <Route path='/home/*' element={<HomePage />} />
       <Route path='/fruits' element={<FruitsPage />} />
       <Route path='/vegetables' element={<VegetablesPage />} />
       <Route path='/*' element={<NotFoundPage />} />
     </Routes> 
    </div>
  );
}



