import FruitsCards from '../FruitsCards';
import { fruits } from '../../data/fruits';
import VegetableCards from '../VegetableCards';
import { vegetables } from '../../data/vegetables'
import FruitsPage from '../../pages/FruitsPage';
import VegetablesPage from '../../pages/VegetablesPage';
import Nav from '../Nav';
import { Routes, Route } from 'react-router-dom'

export default function App() {

  return (

<div>

      <h2>Fruits:</h2>

      {
        fruits.map(el => <FruitsCards {...el} key={el.id} />)
      }

<h2>Vegetables:</h2>

{
  vegetables.map(el => <VegetableCards {...el} key={el.id} />)
}

     <FruitsCards />
     <VegetableCards />
     <Nav />
     <Routes>
       <Route path='/fruits_page' element={<FruitsPage />} />
       <Route path='/vegetables_page' element={<VegetablesPage />} />
     </Routes> 
    </div>
  );
}



