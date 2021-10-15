import React from 'react';
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



const Search = () => {

  return(
    <SearchContainer>
      <Input type="text" placeholder="Znajdź produkt"></Input>
      <Icon className="fas fa-search"></Icon>
    </SearchContainer>
  );
};

export default Search;