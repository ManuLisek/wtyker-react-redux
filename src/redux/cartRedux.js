/* SELECTORS */
export const getCart = ({ cart }) => cart;
export const getTotalQuantity = ({ cart }) => {
  const quantityArray = cart.productsInCart.map((product) => {
    return product.quantity;
  });
  const totalQuantity = quantityArray.reduce((a, b) => a + b, 0);
  return totalQuantity;
};
export const getTotalPrice = ({ cart }) => {
  const pricesArray = cart.productsInCart.map((product) => {
    return product.price * product.quantity;
  });
  const sumOfPrices = pricesArray.reduce((a, b) => a + b, 0);
  const totalPrice = sumOfPrices + cart.delivery;
  return totalPrice;
};

/* ACTIONS */

// action name creator
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');
export const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
export const COUNT_PRODUCTS = createActionName('COUNT_PRODUCTS');
export const INCREASE_QUANTITY = createActionName('INCREASE_QUANTITY');
export const DECREASE_QUANTITY = createActionName('DECREASE_QUANTITY');
export const COUNT_PRICE = createActionName('COUNT_PRICE');
export const CLEAR_CART = createActionName('CLEAR_CART');

// action creators
export const addProductToCart = (payload) => ({ payload, type: ADD_PRODUCT });
export const removeProductFromCart = (payload) => ({
  payload,
  type: REMOVE_PRODUCT,
});
export const countProductsInCart = (payload) => ({
  payload,
  type: COUNT_PRODUCTS,
});
export const increaseQuantityInCart = (payload) => ({
  payload,
  type: INCREASE_QUANTITY,
});
export const decreaseQuantityInCart = (payload) => ({
  payload,
  type: DECREASE_QUANTITY,
});
export const countTotalPrice = (payload) => ({ payload, type: COUNT_PRICE });
export const clearCart = (payload) => ({ payload, type: CLEAR_CART });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...statePart,
        productsInCart: [...statePart.productsInCart, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...statePart,
        productsInCart: statePart.productsInCart.filter(
          (product) => product !== action.payload
        ),
      };
    case COUNT_PRODUCTS:
      return {
        ...statePart,
        totalQuantity: action.payload,
      };
    case INCREASE_QUANTITY:
      return {
        ...statePart,
        productsInCart: statePart.productsInCart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: action.payload.quantity + 1,
            };
          }
          return product;
        }),
      };
    case DECREASE_QUANTITY:
      return {
        ...statePart,
        productsInCart: statePart.productsInCart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: action.payload.quantity - 1,
            };
          }
          return product;
        }),
      };
    case COUNT_PRICE:
      return {
        ...statePart,
        totalPrice: action.payload,
      };
    case CLEAR_CART:
      return {
        ...statePart,
        ...action.payload,
      };
    default:
      return statePart;
  }
}
