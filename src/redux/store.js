import {products} from '../products/products';
import {combineReducers, createStore} from 'redux';
import filtersReducer from './filtersRedux';
import cartReducer from './cartRedux';


export const filtersInitialState = {
  searchPhrase: '',
  checkedTags: [],
  checkedBrands: [],
  price: {
    from: 50,
    to: 3400,
  },
  sortingKey: '---',
};

export const cartInitialState = {
  productsInCart: [],
  quantityInCart: 0,
};


const initialState = {
  products,
  filters: filtersInitialState,
  cart: cartInitialState,
};


// define reducers
const reducers = {
  filters: filtersReducer,
  cart: cartReducer,
};
  
// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});
  
// combine reducers
const combinedReducers = combineReducers(reducers);


const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
    
export default store;
