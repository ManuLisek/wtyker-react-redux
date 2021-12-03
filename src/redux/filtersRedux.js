/* SELECTORS */
export const getAllProducts = ({products}) => products;
export const getAllFilters = ({filters}) => filters;
export const getAllTags = ({products}) => {
  const allTags = [];
    
  products.forEach(product => {
    allTags.push(...product.tags);
  });
    
  const tags = [...new Set(allTags)];
  return tags;
};
export const getAllBrands = ({products}) => {
  const allBrands = [];
  
  products.forEach(product => {
    allBrands.push(product.brand);
  });
  
  const brands = [...new Set(allBrands)];
  return brands;
};

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_PRICE = createActionName('CHANGE_PRICE');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const ADD_BRAND = createActionName('ADD_BRAND');
export const REMOVE_BRAND = createActionName('REMOVE_BRAND');
export const CHANGE_KEY = createActionName('CHANGE_KEY');
export const CLEAR_FILTERS = createActionName('CLEAR_FILTERS');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changePrice = payload => ({payload, type: CHANGE_PRICE});
export const addTag = payload => ({payload, type: ADD_TAG});
export const removeTag = payload => ({payload, type: REMOVE_TAG});
export const addBrand = payload => ({payload, type: ADD_BRAND});
export const removeBrand = payload => ({payload, type: REMOVE_BRAND});
export const changeSortingKey = payload => ({payload, type: CHANGE_KEY});
export const clearFilters = payload => ({payload, type: CLEAR_FILTERS});

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
    case ADD_BRAND:
      return {
        ...statePart,
        checkedBrands: [...statePart.checkedBrands, action.payload],
      };
    case REMOVE_BRAND:
      return {
        ...statePart,
        checkedBrands: statePart.checkedBrands.filter(brand => brand !== action.payload),
      };
    case CHANGE_KEY: 
      return {
        ...statePart,
        sortingKey: action.payload,
      };
    case CLEAR_FILTERS:
      return{
        ...statePart,
        ...action.payload,
      };
    default:
      return statePart;
  }
}