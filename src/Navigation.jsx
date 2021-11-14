import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/Wtyker.png';
import styled from 'styled-components';
import Search from './Search/SearchContainer';

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
margin: 30px 0 0 30px;
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


const Navigation = () => {
  return(
    <NavContainer>
      <div>
        <Logo src={logo} width="60" height="100" alt="logo"/>
      </div>
      <SearchIconsContainer>
        <Search/>
        <Link to='/cart'>
          <IconCart className="fas fa-shopping-basket">
            <QuantityInCart>0</QuantityInCart>
          </IconCart>
        </Link>
      </SearchIconsContainer>
    </NavContainer>
  );};

export default Navigation;