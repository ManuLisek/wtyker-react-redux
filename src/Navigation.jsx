import React from 'react';
import logo from './images/Wtyker.png';
import styled from 'styled-components';

const NavContainer = styled.nav`
display: flex;
align-items: center;
/* margin-bottom: 30px; */
@media (max-width: 400px){
    flex-direction: column;
    align-items: center;
}
`;

const Logo = styled.img`
height: 100px;
margin: 10px;
`;

const SearchIconsContainer = styled.div`
flex-grow: 1;
display: flex;
align-items: center;
justify-content: center;
`;

const IconCart = styled.i`
background-color: #007065;
color: white;
border: 2px solid #007065;
border-radius: 50%;
padding: 10px;
`;

const QuantityInCart = styled.div`
position: absolute;
background-color: lightcyan;
color: #007065;
width: 18px;
height: 18px;
border-radius: 50%;
z-index: 1;
text-align: center;
transform: translate(50%, 10%);
`;


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


const Navigation = () => {
  return(
    <NavContainer>
      <div>
        <Logo src={logo} width="60" height="100" alt="logo"/>
      </div>
      <SearchIconsContainer>
        <SearchContainer>
          <Input type="text" placeholder="Znajdź produkt"></Input>
          <Icon className="fas fa-search"></Icon>
        </SearchContainer>
        <IconCart className="fas fa-shopping-basket">
          <QuantityInCart>0</QuantityInCart>
        </IconCart>
      </SearchIconsContainer>
    </NavContainer>
  );};

export default Navigation;