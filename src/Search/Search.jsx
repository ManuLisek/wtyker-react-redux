import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const SearchContainer = styled.div`
/* justify-self: center;
align-self: center; */
`;

const Input = styled.input`
margin: 5px 10px;
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

  return(
    <SearchContainer>
      <Input type="text" placeholder="Znajdź produkt" ref={textInput}></Input>
      <Icon className="fas fa-search" onClick={handleClick}></Icon>
    </SearchContainer>
  );
};

Search.propTypes = {
  changeSearchPhrase: PropTypes.func,
};

export default Search;