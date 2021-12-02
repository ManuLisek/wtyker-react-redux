import {connect} from 'react-redux';
import Navigation from './Navigation';
import {getCart} from '../../redux/cartRedux';

const mapStateToProps = state => ({
  cart: getCart(state),
});

export default connect(mapStateToProps)(Navigation);