import {connect} from 'react-redux';
import Cart from '../Cart/Cart';
import {getCart, removeProductFromCart, countProductsInCart, increaseQuantityInCart, decreaseQuantityInCart, countTotalPrice, clearCart} from '../redux/cartRedux';


const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  removeProductFromCart: product => dispatch(removeProductFromCart(product)),
  countProductsInCart: quantity => dispatch(countProductsInCart(quantity)),
  increaseQuantityInCart: searchedQuantity => dispatch(increaseQuantityInCart(searchedQuantity)),
  decreaseQuantityInCart: searchedQuantity => dispatch(decreaseQuantityInCart(searchedQuantity)),
  countTotalPrice: price => dispatch(countTotalPrice(price.toFixed(2))),
  clearCart: emptyCart => dispatch(clearCart(emptyCart)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Cart);