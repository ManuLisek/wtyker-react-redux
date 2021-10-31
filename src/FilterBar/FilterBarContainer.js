import {connect} from 'react-redux';
import FilterBar from '../FilterBar/FilterBar';
import {getAllProducts, getAllPrices, getAllCheckedTags, changePrice, addTag, removeTag} from '../redux/filtersRedux';

const mapStateToProps = state => ({
  products: getAllProducts(state),
  price: getAllPrices(state),
  checkedTags: getAllCheckedTags(state),
});

const mapDispatchToProps = dispatch => ({
  changePrice: (type, value) => dispatch(changePrice({[type]: value})),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
});



export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);