import { connect } from 'react-redux';
import FilterBar from './FilterBar';
import {
  getAllFilters,
  getAllTags,
  getAllBrands,
  changePrice,
  addTag,
  removeTag,
  addBrand,
  removeBrand,
  changeSortingKey,
  clearFilters,
} from '../../redux/filtersRedux';

const mapStateToProps = (state) => ({
  filters: getAllFilters(state),
  tags: getAllTags(state),
  brands: getAllBrands(state),
});

const mapDispatchToProps = (dispatch) => ({
  changePrice: (type, value) => dispatch(changePrice({ [type]: value })),
  addTag: (tag) => dispatch(addTag(tag)),
  removeTag: (tag) => dispatch(removeTag(tag)),
  addBrand: (brand) => dispatch(addBrand(brand)),
  removeBrand: (brand) => dispatch(removeBrand(brand)),
  changeSortingKey: (sortingKey) => dispatch(changeSortingKey(sortingKey)),
  clearFilters: (clearedFilters) => dispatch(clearFilters(clearedFilters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
