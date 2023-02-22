import AddProductForm from './components/AddProductForm';
import Cart from './components/Cart';
import ProductsContainer from './components/ProductsContainer';

export default function App() {
  return (
    <div>
          <AddProductForm />
          <ProductsContainer />
          <Cart />
    </div>
  );
};
