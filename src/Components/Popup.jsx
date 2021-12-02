import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PopupContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.2);
color: #007065;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
z-index: 2;
`;

const PopupInner = styled.div`
position: relative;
padding: 32px;
width: 100%;
max-width: 640px;
background-color: #fff;
border-radius: 5px;
`;

const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const Popup = (props) => {
  const {trigger, children, closePopup} = props;

  return (trigger) ? (
    <PopupContainer>
      <PopupInner>
        {children}
        <ButtonContainer>
          <Button onClick={closePopup}>
            Ok
          </Button>
        </ButtonContainer>
      </PopupInner>
    </PopupContainer>
  ) : '';
};

Popup.propTypes = {
  trigger: PropTypes.bool,
  children: PropTypes.node,
  closePopup: PropTypes.func,
};

export default Popup;