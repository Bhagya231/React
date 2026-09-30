import ProductCard  from "./ProductCard";



export function ProductList({products,onSelectProduct})
{
    return(
        <div className="row g-4">
            
            {products.map((product) =>(
                <div className="col-md-4" key={product.id}>
                    <ProductCard product = {product} onSelectProduct={onSelectProduct} />
                 
                </div>
                
            ))}
        </div>


    )

}