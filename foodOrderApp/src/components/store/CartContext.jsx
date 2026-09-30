import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {}
});

function cartReducer(state,action)
{
    if(action.type === 'ADD_item')
    {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        
        const updatedItems = [...state.items];

        if(existingCartItemIndex > -1)
        {
            const existingItem = state.items[existingCartItemIndex];
            const updatesItem = {
                ...state.items[existingCartItemIndex],
                quantity: existingItem.quantity + 1
            };

            updatedItems[existingCartItemIndex] = updatesItem;

        }else{
            updatedItems.push({...action.item, quantity: 1});

        }

        return {...state, items: updatedItems}
    }

    if(action.type === 'Remove_item')
    {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingCartItem =  state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if(existingCartItem.quantity === 1)
        {
            updatedItems.splice(existingCartItemIndex,1);
        }else{
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity -1
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        
        return {...state, items: updatedItems}
    }

    if(action.type === 'Clear_Cart'){
        return {...state, items: []};
    }
    return state;
}

export function CartContextProvider({children})
{
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []})

    function addItem(item){
        dispatchCartAction({type: 'ADD_item', item});
    }

    function removeItem(id) {
        dispatchCartAction({type: 'Remove_item', id});
    }

    function clearCart()
    {
        dispatchCartAction({type: 'Clear_Cart'});
    }

    const cartContext = {items: cart.items,
        addItem,
        removeItem,
        clearCart
    };

    console.log(cartContext);
    
    return <CartContext value ={cartContext}>{children}</CartContext>
}

export default CartContext;