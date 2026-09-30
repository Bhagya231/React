import { useState } from "react";
import products from "./data/products";
import {ProductList} from "./components/ProductList";
import Section from "./components/Section";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleSelectProduct(product)
  {
    setSelectedProduct(product);
  }
  return(
    <div>
      <Section  as="header" title="Product Explorer">
        <p className="text-center text-muted">
          Explore our products
        </p>
      </Section>
      <Section as="main" title="Available Products">
        <ProductList products={products} onSelectProduct={handleSelectProduct} />
      </Section>
      <Section as="aside" title="Selected Product">
        {selectedProduct ? (
          <div className="selected-product">
            <h4>{selectedProduct.name}</h4>
            <p>price: ₹{selectedProduct.price}</p>
          </div>
        ):(
          <p className="text-muted">No Product selected</p>
        )}
      </Section>
    </div>
  )


}


export default App
