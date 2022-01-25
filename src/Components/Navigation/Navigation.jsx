import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from '../Search/SearchContainer';
import size from '../../styles/breakpoints';
import colors from '../../styles/colors';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: ${size.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 100px;
  margin: 30px 0 0 30px;
  @media (max-width: ${size.md}) {
    margin: 30px;
  }
`;

const IconsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${size.sm}) {
    flex-direction: column;
  }
`;

const IconCart = styled.i`
  background-color: ${colors.secondary};
  color: white;
  border: 2px solid ${colors.secondary};
  border-radius: 50%;
  padding: 10px;
  margin: 15px;
  &:hover {
    background-color: ${colors.secondaryHovered};
    border-color: ${colors.secondaryHovered};
  }
`;

const QuantityInCart = styled.div`
  position: absolute;
  background-color: ${colors.lightcyan};
  color: ${colors.secondary};
  padding: 2px;
  min-width: 18px;
  min-height: 18px;
  border-radius: 50%;
  z-index: 1;
  text-align: center;
  transform: translate(50%, 10%);
`;

function Navigation({ cart }) {
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <Logo
            src="https://res.cloudinary.com/dorwcwygq/image/upload/v1636226766/wtyker/Wtyker_vt9mu8.png"
            alt="logo"
          />
        </Link>
      </div>
      <IconsContainer>
        <Search />
        <Link to="/cart" aria-label="cart">
          <IconCart className="fas fa-shopping-basket">
            <QuantityInCart>{cart.totalQuantity}</QuantityInCart>
          </IconCart>
        </Link>
      </IconsContainer>
    </NavContainer>
  );
}

Navigation.propTypes = {
  cart: PropTypes.object,
};

export default Navigation;
