/* SELECTORS */
export const getCart = ({cart}) => cart;

/* ACTIONS */

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');
export const COUNT_PRODUCTS = createActionName('COUNT_PRODUCTS');

// action creators
export const addProductToCart = payload => ({payload, type: ADD_PRODUCT});
export const countProductsInCart = payload => ({payload, type: COUNT_PRODUCTS});


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...statePart,
        productsInCart: [...statePart.productsInCart, action.payload],
      };
    case COUNT_PRODUCTS:
      return {
        ...statePart,
        quantityInCart: action.payload,
      };
    default:
      return statePart;
  }
  
}
