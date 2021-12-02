import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const SearchContainer = styled.div`
text-align: center;
`;

const Input = styled.input`
background-color: inherit;
border: none;
border-bottom: 2px solid #007065;
outline: none;
&:focus {
    background-color: white;
    border-bottom: none;
}
`;
const IconSearch = styled.i`
margin: 5px 10px;
border: 2px solid #007065;
color: #007065;
border-radius: 50%;
padding: 10px;
&:hover {
    border-color: #118176;
}
`;



const Search = ({changeSearchPhrase}) => {

  let textInput = React.createRef();
  const history = useHistory();

  function handleClick(){
    changeSearchPhrase(textInput.current.value);
    textInput.current.value = '';
  }

  console.log(history.location.pathname);

  function handleKeyDown(e){
    if (e.key === 'Enter') {
      handleClick();
      if(history.location.pathname !== '/products')
        history.push('/products');
    }
  }

  return(
    <SearchContainer>
      <Input type="text" placeholder="Znajdź produkt" ref={textInput} onKeyDown={handleKeyDown}></Input>
      <Link to='/products'>
        <IconSearch className="fas fa-search" onClick={handleClick}></IconSearch>
      </Link>
    </SearchContainer>
  );
};

Search.propTypes = {
  changeSearchPhrase: PropTypes.func,
};

export default Search;