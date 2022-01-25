import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styles/colors';

const ButtonContainer = styled.div`
  background-color: ${colors.secondary};
  border: none;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 12px;
  cursor: pointer;
  min-width: 100px;
  min-height: 45px;
  &:hover {
    background-color: ${colors.secondaryHovered};
  }
`;

const Button = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
