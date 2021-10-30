import {connect} from 'react-redux';
import FilterBar from '../FilterBar/FilterBar';
import {getAllProducts, getAllPrices, changePrice} from '../redux/filtersRedux';

const mapStateToProps = state => ({
  products: getAllProducts(state),
  price: getAllPrices(state),
});

const mapDispatchToProps = dispatch => ({
  changePrice: (type, value) => dispatch(changePrice({[type]: value})),
});



export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);