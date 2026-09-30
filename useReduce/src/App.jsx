
import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy_products.js";


import CartContextProvider from "./use/cart-context.jsx"

function App() {
 

  return (
    <CartContextProvider>
      <Header/>
      <Shop  >
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product}  />
          </li>
        ))}
      
      </Shop>
    </CartContextProvider>
  );
}

export default App;
