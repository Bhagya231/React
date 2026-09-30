import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';



export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-6b4a6.firebaseio.com/cart.json');
            if(!response.ok)
            {
                throw new Error('Cloud not fetch cart data!');
            }

            const data = await response.json();

            return data;
        }

        try{
          const cartData = await fetchData();

          dispatch(cartActions.replaceCart(cartData));

        }catch(error)
        {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Sending cart data failed!'
            }));

        }
    }
}



export const sendCartData = (cart) => {
    return async (dispatch) => {
         dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));
        const sendRequest = async () => {
              const response = await fetch(
                'http://react-http-6b4a6.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                });

                if (!response.ok) {
                throw new Error('Sending cart data failed!');
                }

        }
        try{
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Cart data sent successfully!'
            }));
        }catch(error)
        {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Sending cart data failed!'
            }));
        }
      

    

    }
}