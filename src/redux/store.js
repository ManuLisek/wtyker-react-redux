import {createStore} from 'redux';
import {products} from '../products/products';
import filtersReducer from './filtersRedux';


const initialState = {
  products,
  searchPhrase: '',
};

const store = createStore(
  filtersReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
export default store;