import products from '../js/data.js';
import { ProductCard } from './ProductCard.jsx';

export function Products()
{
    return(

        <section>
           
           <h1 className="text-center mb-4 fw-bold" >Products</h1>
           <div className='row g-4'>


            {/* <ProductCard name= {products[0].title} 
            image = {products[0].image}
             description = {products[0].description} />
   */}
                    {/* <ProductCard {...products[0]} />
                                  
             */}
            

            {products.map((product) =>(
                 <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                    {/* <ProductCard product={product} /> */}
                    <ProductCard  name = {product.name}
                    image ={product.image}
                    description ={product.description} stock = {product.stock} />

                 </div>
                
            ))}
            

           </div>
        </section>
    );
}