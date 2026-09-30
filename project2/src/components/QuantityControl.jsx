import { useState } from "react";

function QuantityControl({onQuantityChange})
{
    const [quantity, setQuantity] = useState(1);

    function increaseQuantity()
    {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity );
        onQuantityChange(newQuantity);
    }
    function decreaseQuantity()
    {
       if(quantity >1)
       {
         const newQuantity = quantity - 1;
        setQuantity(newQuantity );
        onQuantityChange(newQuantity);
       }
    }

    return(
        <div className="d-flex align-items-center gap-2">
             <button className="btn btn-outline-secondary btn-sm" 
             onClick={decreaseQuantity}>-</button>
             <span>{quantity}</span>
            <button className="btn btn-outline-secondary btn-sm" 
             onClick={increaseQuantity}>+</button>
         
        </div>
    );
}

export default QuantityControl;