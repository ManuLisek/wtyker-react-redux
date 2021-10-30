/* ACTIONS */
export const getAllProducts = ({products}) => products;
export const getAllPrices = ({price}) => price;

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_PRICE = createActionName('CHANGE_PRICE');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changePrice = payload => ({payload, type: CHANGE_PRICE});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_PRICE:
      return {
        ...statePart,
        price: {...statePart.price, ...action.payload},
      };
    default:
      return statePart;
  }
  
}