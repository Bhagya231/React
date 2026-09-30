import { useContext } from "react";
import CartContext from "./store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting"
import Modal from "./UI/Modal.jsx"
import useHttp from '../hooks/useHttp.js';
import Error from "./Error.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";


const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function Checkout()
{

     const cartCtx = useContext(CartContext);
     const UserProgressCtx = useContext(UserProgressContext);

    const {data, isLoading: isSending, error, sendRequest, clearData} = useHttp('http://localhost:3000/orders', requestConfig, null)

    const cartTotal = cartCtx.items.reduce(
        (totalPrice,item) => (totalPrice + item.quantity * item.price),
    0);

    function handleCloseCheckout()
    {
        UserProgressCtx.hideCheckout();
    }

    function handleFinish()
    {
        UserProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
       
    }

    async function handleSubmit(event)
    {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const userData = Object.fromEntries(formdata.entries());  // { email: user@gamil.com}

        sendRequest(JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: userData
                }
            }));
    }

    let actions = (
        <>
            <Button type="button" onClick={handleCloseCheckout} textOnly>Close</Button>
            <Button >Submit Order</Button>
        </>

    );

    if(isSending)
    {
        actions = <span>Sending Order data...</span>
    }

    if(data && !error)
    {
        return (
            <Modal open={UserProgressCtx.progress === 'checkout'} onClose={ handleFinish}>
                <h2>Success!</h2>
                <p>Your order was submitted successfully.</p>
                <p className="modal-actions">
                    <Button onClick={handleFinish}>Okay</Button>
                </p>
            </Modal>
        )
    }

    return (
        <Modal open={UserProgressCtx.progress === 'checkout'} onClose={UserProgressCtx.progress === 'checkout' ? handleCloseCheckout : null} >
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                <Input label="Full Name" type="text" id="name" />
                <Input label="E-mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />

                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>

                    {error && <Error title="Failed to submit order" message={error} />}
                
                <p className="modal-actions">{actions}</p>


            </form>
        </Modal>
    )
}