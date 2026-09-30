import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummy_products = [
  {
    id: 'p1',
    price: 12,
    title: 'My First Book',
    description: 'The first book I ever Wrote',
  },
   {
    id: 'p2',
    price: 9,
    title: 'My second Book',
    description: 'The second book I ever Wrote',
  },
   {
    id: 'p3',
    price: 14,
    title: 'My third Book',
    description: ' book I ever Wrote',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_products.map((product) => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />

        ))}
        
      </ul>
    </section>
  );
};

export default Products;
