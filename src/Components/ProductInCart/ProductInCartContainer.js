import { connect } from 'react-redux';
import ProductInCart from './ProductInCart';
import {
  getTotalQuantity,
  getCart,
  getTotalPrice,
  removeProductFromCart,
  countProductsInCart,
  increaseQuantityInCart,
  decreaseQuantityInCart,
  countTotalPrice,
} from '../../redux/cartRedux';

const mapStateToProps = (state) => ({
  cart: getCart(state),
  totalQuantity: getTotalQuantity(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeProductFromCart: (product) => dispatch(removeProductFromCart(product)),
  countProductsInCart: (quantity) => dispatch(countProductsInCart(quantity)),
  increaseQuantityInCart: (searchedQuantity) =>
    dispatch(increaseQuantityInCart(searchedQuantity)),
  decreaseQuantityInCart: (searchedQuantity) =>
    dispatch(decreaseQuantityInCart(searchedQuantity)),
  countTotalPrice: (price) => dispatch(countTotalPrice(price.toFixed(2))),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductInCart);
