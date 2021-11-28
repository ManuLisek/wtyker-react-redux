import {connect} from 'react-redux';
import Product from '../Product/Product';
import {getCart, getTotalQuantity, getTotalPrice, addProductToCart, countProductsInCart, countTotalPrice} from '../redux/cartRedux';
import {getAllProducts} from '../redux/filtersRedux';

const mapStateToProps = state => ({
  cart: getCart(state),
  products: getAllProducts(state),
  totalQuantity: getTotalQuantity(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: productToCart => dispatch(addProductToCart(productToCart)),
  countProductsInCart: totalQuantity => dispatch(countProductsInCart(totalQuantity)),
  countTotalPrice: price => dispatch(countTotalPrice(price.toFixed(2))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);