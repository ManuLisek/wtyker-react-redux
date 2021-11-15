import {connect} from 'react-redux';
import Product from '../Product/Product';
import {getCart, addProductToCart, countProductsInCart, countTotalPrice} from '../redux/cartRedux';
import {getAllProducts} from '../redux/filtersRedux';

const mapStateToProps = state => ({
  cart: getCart(state),
  products: getAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addProductToCart(product)),
  countProductsInCart: quantity => dispatch(countProductsInCart(quantity)),
  countTotalPrice: price => dispatch(countTotalPrice(price)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Product);