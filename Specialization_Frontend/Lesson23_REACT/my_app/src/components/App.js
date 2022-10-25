import User from "./User";
import { users } from '../data/users'
import Product from "./Product";
import { products } from '../data/products'

export default function App() {


  return (
    <div>
      {/* <User firstname='Oleg' lastname='Petrov' age='50' />
      <User firstname='Irina' lastname='Ivanova' age='10'/>
      <User firstname='Mariam' lastname='Lofink' age='37'/> */}

      {/* {
        users.map(el => <User firstname={el.firstname} lastname={el.lastname} age={el.age} />)
      } */}

      <h2>Users:</h2>

      {
        users.map(el => <User {...el} key={el.id} />)
      }

<h2>Products:</h2>

{
  products.map(el => <Product {...el} key={el.id} />)
}

    </div>
  );
};
