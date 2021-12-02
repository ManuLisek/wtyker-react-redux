import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.div`
background-color: #007065;
border: none;
font-weight: bold;
text-align: center;
color: white;
padding: 10px 15px;
border-radius: 5px;
margin-top: 12px;
cursor: pointer;
min-width: 100px;
&:hover {
    background-color: #118176;
}
`;

const Button = ({children, onClick}) => {

  return(
    <ButtonContainer onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;