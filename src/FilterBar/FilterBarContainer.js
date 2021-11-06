import {connect} from 'react-redux';
import FilterBar from '../FilterBar/FilterBar';
import {getAllProducts, getAllPrices, getAllCheckedTags, getAllCheckedBrands, changePrice, addTag, removeTag, addBrand, removeBrand, changeSortingKey} from '../redux/filtersRedux';

const mapStateToProps = state => ({
  products: getAllProducts(state),
  price: getAllPrices(state),
  checkedTags: getAllCheckedTags(state),
  checkedBrands: getAllCheckedBrands(state),
});

const mapDispatchToProps = dispatch => ({
  changePrice: (type, value) => dispatch(changePrice({[type]: value})),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
  addBrand: brand => dispatch(addBrand(brand)),
  removeBrand: brand => dispatch(removeBrand(brand)),
  changeSortingKey: sortingKey => dispatch(changeSortingKey(sortingKey)),
});



export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);