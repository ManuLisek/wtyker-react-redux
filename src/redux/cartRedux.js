/* SELECTORS */
export const getCart = ({cart}) => cart;

/* ACTIONS */

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');

// action creators
export const addProductToCart = payload => ({payload, type: ADD_PRODUCT});


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...statePart,
        productsInCart: [...statePart.productsInCart, action.payload],
      };
    default:
      return statePart;
  }
  
}
