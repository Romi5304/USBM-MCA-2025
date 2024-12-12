// src/CartContext.jsx
import { createContext, useReducer, useContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload.id);
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

export const CartProvider = ( ) => {
    const [state, dispatch] = useReducer(cartReducer, []);
    
    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);