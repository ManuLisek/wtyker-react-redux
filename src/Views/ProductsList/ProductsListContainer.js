import { connect } from 'react-redux';
import ProductsList from './ProductsList';
import { getFilteredProducts } from '../../redux/productsListRedux';

const mapStateToProps = (state) => ({
  products: getFilteredProducts(state),
});

export default connect(mapStateToProps)(ProductsList);
