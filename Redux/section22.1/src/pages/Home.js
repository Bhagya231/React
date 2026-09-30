import {Link, useNavigate} from 'react-router-dom'

function HomePage()
{
    const navigation = useNavigate();

    function navigateHandler()
    {
        navigation('/products');
    }

    return (
        <>
        <h1>MY Home Page</h1>
        <p>
            Go To <Link to="/products">The list of products</Link>.
        </p>
        <p>
            <button onClick={navigateHandler}>Navigate</button>
        </p>
        </>
    )
}

export default HomePage;