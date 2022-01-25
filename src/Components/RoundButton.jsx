import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styles/colors';

const ButtonContainer = styled.button`
  width: 26px;
  height: 26px;
  margin: 0 8px;
  color: white;
  border-radius: 50%;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${colors.secondaryHovered};
  }
`;

const RoundButton = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

RoundButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default RoundButton;
