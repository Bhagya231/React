import { Link } from "react-router-dom";

function ProductsPage()
{

    const Products = [
        {id: 'p1', title: 'Product 1'},
        {id: 'p2', title: 'Product 2'},
        {id: 'p3', title: 'Product 3'},
        {id: 'p4', title: 'Product 4'}
    ]

    return (
        <>
            <h1>The Product page</h1>
            <ul>
                {Products.map((prod) => (
                    <li key={prod.id}>
                        <Link to={`products/${prod.id}`}>{prod.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ProductsPage;