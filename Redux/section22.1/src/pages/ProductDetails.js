import { useParams, Link} from 'react-router-dom'

function ProductDetailspage()
{
    const params = useParams();

    return (
        <>
        <h2>product Details!</h2>
        <p>{params.productId}</p>
        <p>
            <Link to='..' relative='path'>Back</Link>
        </p>
        </>
    );
}

export default ProductDetailspage;