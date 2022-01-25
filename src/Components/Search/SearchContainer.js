import { connect } from 'react-redux';
import Search from './Search';
import { changeSearchPhrase } from '../../redux/filtersRedux';

const mapDispatchToProps = (dispatch) => ({
  changeSearchPhrase: (phrase) => dispatch(changeSearchPhrase(phrase)),
});

export default connect(null, mapDispatchToProps)(Search);
