import {connect} from 'react-redux';
import ProductsList from './ProductsList';
import {getProducts} from '../redux/productsListRedux';


const mapStateToProps = state => ({
  products: getProducts(state),
});
  
export default connect(mapStateToProps)(ProductsList);