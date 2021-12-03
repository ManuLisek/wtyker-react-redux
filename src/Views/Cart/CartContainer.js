import {connect} from 'react-redux';
import Cart from '../Cart/Cart';
import {getCart, clearCart} from '../../redux/cartRedux';

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  clearCart: emptyCart => dispatch(clearCart(emptyCart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);