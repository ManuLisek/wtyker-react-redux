import {products} from '../products/products';
import {combineReducers, createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filtersReducer from './filtersRedux';
import cartReducer from './cartRedux';


// create initial state for filters
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
  
// create initial state for cart
export const cartInitialState = {
  productsInCart: [],
  totalQuantity: 0,
  totalPrice: 0,
  delivery: 20,
};
  
// define initial state
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

//define persistConfig  
const persistConfig = {
  key: 'root',
  storage,
};
    
// combine reducers
const combinedReducers = combineReducers(reducers);
  
// define persisted reducers
const persistedReducers = persistReducer(persistConfig, combinedReducers);
  
// create store
export const store = createStore(
  persistedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
// define persistor
export const persistor = persistStore(store);
