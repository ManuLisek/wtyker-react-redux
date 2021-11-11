import {connect} from 'react-redux';
import Cart from '../Cart/Cart';
import {getCart, addProductToCart, countProductsInCart, increaseQuantityInCart, decreaseQuantityInCart} from '../redux/cartRedux';


const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addProductToCart(product)),
  countProductsInCart: quantity => dispatch(countProductsInCart(quantity)),
  increaseQuantityInCart: searchedQuantity => dispatch(increaseQuantityInCart(searchedQuantity)),
  decreaseQuantityInCart: searchedQuantity => dispatch(decreaseQuantityInCart(searchedQuantity)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Cart);