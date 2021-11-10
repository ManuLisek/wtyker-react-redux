import {connect} from 'react-redux';
import Cart from '../Cart/Cart';
import {getCart, addProductToCart} from '../redux/cartRedux';


const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addProductToCart(product)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Cart);