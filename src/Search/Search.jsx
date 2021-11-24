import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const SearchContainer = styled.div`
    /* display: flex;
    align-items: center;
@media (max-width: 320px){
    flex-direction: column;
} */
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
const Icon = styled.i`
margin: 5px 10px;
border: 2px solid #007065;
color: #007065;
border-radius: 50%;
padding: 10px;
`;



const Search = ({changeSearchPhrase}) => {

  let textInput = React.createRef();

  function handleClick(){
    changeSearchPhrase(textInput.current.value);
    textInput.current.value = '';
  }

  function handleKeyDown(e){
    if (e.key === 'Enter') {
      handleClick();
      window.location.pathname = '/products';
    }
  }

  return(
    <SearchContainer>
      <Input type="text" placeholder="Znajdź produkt" ref={textInput} onKeyDown={handleKeyDown}></Input>
      <Link to='/products'>
        <Icon className="fas fa-search" onClick={handleClick}></Icon>
      </Link>
    </SearchContainer>
  );
};

Search.propTypes = {
  changeSearchPhrase: PropTypes.func,
};

export default Search;