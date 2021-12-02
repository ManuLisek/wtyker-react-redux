import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.button`
width: 26px;
height: 26px;
margin: 0 8px;
color: white;
border-radius: 50%;
background-color: #007065;
border: 1px solid white;
cursor: pointer;
&:hover {
    background-color: #118176;
}
`;

const RoundButton = ({children, onClick}) => {

  return(
    <ButtonContainer onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

RoundButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default RoundButton;