import Card from "./Card";
import QuantityControl from "./QuantityControl";

function ProductCard({product,onSelectProduct})
{
    return(
        <>
        <Card>
        <div className="product-header">
            <h5 className="product-name">{product.name}</h5>
        </div>
        <div className="product-body">
            <p className="product-price">
                ₹{product.price}
            </p>
            <p className="text-muted"> {product.category}</p>
            <QuantityControl onQuantityChange={(quantity) => console.log(product.name,quantity)} />
        </div>

        <div className="product-footer myt-3">
            <button className="btn btn-primary w-100" 
            onClick={() => onSelectProduct(product)}>Select Product</button>
        </div>
        </Card>
        </>
        
    );
}

export default ProductCard;









  