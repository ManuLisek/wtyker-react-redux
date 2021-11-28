import React, { useState } from 'react';
import ProductInCart from '../ProductInCart/ProductInCartContainer';
import { cartInitialState } from '../redux/store';
import Popup from '../Popup';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import styled from 'styled-components';

const Container = styled.div`
width: 40%;
overflow: hidden;
/* height: 1%; */
min-height: 330px;
background-color: white;
color: black;
border-radius: 10px;
text-align: center;
border: none;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
@media (max-width: 800px){
width: 70%;
}
@media (max-width: 600px){
width: 100%;
}
`;

const Header = styled.h2`
color: #007065;
`;

const ItemsContainer = styled.div`
width: 100%;
border-spacing: 0;
padding: 10px;
min-height: 200px;
height: 1%;
`;

const OrderContainer = styled.div`
padding: 10px;
background-color: plum;
position: relative;
font-weight: bold;
width: 100%;
display: flex;
flex-direction: column;
justify-content: end;
align-items: end;
`;

const OrderSummary = styled.div`
display: flex;
`;

const Description = styled.p`
width: 165px;
text-align: end;
`;

const Price = styled.p`
width: 105px;
text-align: end;
`;

const ButtonConfirmOrder = styled.button`
background-color: #007065;
color: white;
border: none;
border-radius: 5px;
padding: 10px 20px;
margin: 20px;
&:hover {
    cursor: pointer;
}
`;
const CloseBtn = styled.button`
background-color: #007065;
color: white;
border: none;
border-radius: 5px;
padding: 10px 20px;
margin: 20px;
&:hover {
    cursor: pointer;
}
`;
const ButtonContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
`;

function Cart({cart, clearCart}) {

  const [showPopup, setShowPopup] = useState(false);
  const delivery = cart.delivery;

  function handleConfirmOrder(){
    setShowPopup(true);
  }

  const allProductsInCart = cart.productsInCart.map(productInCart => {
    return(
      <ProductInCart key={uuid()} productInCart={productInCart}/>
    );
  });


  return (
    <Container>
      {
        cart.productsInCart.length != 0 
          ? 
          <>
            <ItemsContainer>
              {allProductsInCart}
            </ItemsContainer>
            <OrderContainer>
              <OrderSummary>
                <Description>Koszt dostawy:</Description>
                <Price>{delivery}zł</Price>
              </OrderSummary>
              <OrderSummary>
                <Description>Wartość zamówienia:</Description>
                <Price>{cart.totalPrice}zł</Price>
              </OrderSummary>
              <ButtonContainer>
                <ButtonConfirmOrder onClick={handleConfirmOrder}>
                    Zatwierdź zamówienie
                </ButtonConfirmOrder>
              </ButtonContainer>
              <Popup trigger={showPopup}>
                <h3>Twoje zamówienie zostało przekazane do działu obsługi klienta.</h3>
                <CloseBtn onClick={()=>{ setShowPopup(false); clearCart(cartInitialState); }}>
                    OK
                </CloseBtn>
              </Popup>
            </OrderContainer>
          </>
          : <Header>Twój koszyk jest pusty.</Header>
      }
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
  clearCart: PropTypes.func,
};

export default Cart;