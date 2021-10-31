/* ACTIONS */
export const getAllProducts = ({products}) => products;
export const getAllPrices = ({price}) => price;
export const getAllCheckedTags = ({checkedTags}) => checkedTags;

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_PRICE = createActionName('CHANGE_PRICE');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changePrice = payload => ({payload, type: CHANGE_PRICE});
export const addTag = payload => ({payload, type: ADD_TAG});
export const removeTag = payload => ({payload, type: REMOVE_TAG});

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
    case ADD_TAG:
      return {
        ...statePart,
        checkedTags: [...statePart.checkedTags, action.payload],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        checkedTags: statePart.checkedTags.filter(tag => tag !== action.payload),
      };
    default:
      return statePart;
  }
  
}