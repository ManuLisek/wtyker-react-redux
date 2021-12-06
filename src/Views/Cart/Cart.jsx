import React, { useState } from 'react';
import ProductInCart from '../../Components/ProductInCart/ProductInCartContainer';
import Button from '../../Components/Button';
import { cartInitialState } from '../../redux/store';
import Popup from '../../Components/Popup';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import size from '../../styles/breakpoints';
import colors from '../../styles/colors';

const Container = styled.div`
width: 40%;
overflow: hidden;
min-height: 341px;
background-color: ${colors.white};
color: ${colors.black};
border-radius: 10px;
text-align: center;
border: none;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: ${colors.shadow};
@media (max-width: ${size.lg}){
    width: 70%;
}
@media (max-width: ${size.md}){
    width: 100%;
}
`;

const Header = styled.h2`
color: ${colors.secondary};
`;

const ItemsContainer = styled.div`
width: 100%;
padding: 10px;
min-height: 200px;
`;

const OrderContainer = styled.div`
padding: 10px;
background-color: ${colors.plum};
position: relative;
font-weight: bold;
width: 100%;
display: flex;
flex-direction: column;
justify-content: end;
align-items: end;
flex-grow: 1;
`;

const OrderSummary = styled.div`
display: flex;
`;

const Description = styled.p`
width: 170px;
font-size: 15px;
text-align: end;
`;

const Price = styled.p`
width: 98px;
font-size: 15px;
text-align: end;
`;

const ButtonContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
`;

const Cart = ({cart, clearCart}) => {

  const [showPopup, setShowPopup] = useState(false);
 
  function handleConfirmOrder(){
    setShowPopup(true);
  }

  const allProductsInCart = cart.productsInCart.map(productInCart => {
    return(
      <ProductInCart key={productInCart.id} productInCart={productInCart}/>
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
                <Price>{(cart.delivery).toFixed(2)}zł</Price>
              </OrderSummary>
              <OrderSummary>
                <Description>Wartość zamówienia:</Description>
                <Price>{cart.totalPrice}zł</Price>
              </OrderSummary>
              <ButtonContainer>
                <Button onClick={handleConfirmOrder}>
                    Zatwierdź zamówienie
                </Button>
              </ButtonContainer>
              <Popup trigger={showPopup} closePopup={()=>{ setShowPopup(false); clearCart(cartInitialState); }}>
                <h3>Twoje zamówienie zostało przekazane do działu obsługi klienta.</h3>
              </Popup>
            </OrderContainer>
          </>
          : <Header>Twój koszyk jest pusty.</Header>
      }
    </Container>
  );
};

Cart.propTypes = {
  cart: PropTypes.object,
  clearCart: PropTypes.func,
};

export default Cart;