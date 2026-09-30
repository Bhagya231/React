
// export function ProductCard({product})
// {
//     return(
//         <div className="card shadow-sm h-100">

//             <img src={product.image} alt={product.name}
//             style={{height: "200px", objectFit:"contain",padding:"15px"
//             }} />

//             <div className="card-body">
//                 <h4 className="card-title fw-bold" style={{color:"#48d9f3"}} >
//                     {product.name}</h4>
//                 <p className="card-text text-secondary">{product.description}</p>
//                 <p className="fw-bold" >
//                     Stock: {product.stock}</p>

//                 <button className="btn btn-primary w-100">
//                     Add to Cart
//                 </button>
//             </div>

//         </div>
//     )
// }

 
// import image from '../assets/react.svg';

export function ProductCard({name,image,description,stock})
{
    return(
        <div className="card shadow-sm h-100">

            <img src={image} alt={name}
            style={{height: "200px", objectFit:"contain",padding:"15px"
            }} />

            <div className="card-body">
                <h4 className="card-title fw-bold" style={{color:"#48d9f3"}} >
                    {name}</h4>
                <p className="card-text text-secondary">{description}</p>
                <p className="fw-bold" >
                    Stock: {stock}</p>

                <button className="btn btn-primary w-100">
                    Add to Cart
                </button>
            </div>

        </div>
    )
}