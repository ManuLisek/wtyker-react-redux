/* SELECTORS */
export const getCart = ({cart}) => cart;

/* ACTIONS */

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');
export const COUNT_PRODUCTS = createActionName('COUNT_PRODUCTS');
export const INCREASE_QUANTITY = createActionName('INCREASE_QUANTITY');
export const DECREASE_QUANTITY = createActionName('DECREASE_QUANTITY');


// action creators
export const addProductToCart = payload => ({payload, type: ADD_PRODUCT});
export const countProductsInCart = payload => ({payload, type: COUNT_PRODUCTS});
export const increaseQuantityInCart = payload => ({payload, type: INCREASE_QUANTITY});
export const decreaseQuantityInCart = payload => ({payload, type: DECREASE_QUANTITY});


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
    case INCREASE_QUANTITY:
      return {
        ...statePart,
        productsInCart: statePart.productsInCart.map((product) => {
          if(product.id === action.payload.id) {
            return {
              ...product,
              quantity: action.payload.quantity,
            };
          }
          return product;
        }),
      };
    case DECREASE_QUANTITY:
      return {
        ...statePart,
        productsInCart: statePart.productsInCart.map((product) => {
          if(product.id === action.payload.id) {
            return {
              ...product,
              quantity: action.payload.quantity,
            };
          }
          return product;
        }),
      };
    default:
      return statePart;
  }
  
}
