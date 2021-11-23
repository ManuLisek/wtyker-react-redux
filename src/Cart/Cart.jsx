import React, { useState } from 'react';
import { cartInitialState } from '../redux/store';
import Popup from '../Popup';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import styled from 'styled-components';

const Container = styled.div`
width: 40%;
overflow: hidden;
/* height: 1%; */
min-height: 340px;
background-color: white;
color: black;
border-radius: 10px;
text-align: center;
border: none;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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

const Item = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
&:nth-child(even){
    background-color: #ddd;
}
`;

const TotalPrice = styled.div`
font-weight: bold;
color: green;
`;

const ProductImg = styled.img`
padding: 5px;
width: 70px;
height: 57px;
`;

const IconTrash = styled.i`
color: #007065;
padding: 5px;
width: 70px;
height: 57px;
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
&:hover {
    cursor: pointer;
}
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
/* margin-right: 10px; */
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

const QuantityContainer = styled.div`
display: flex;
width: 100px;
`;

const ButtonChangeQuantity = styled.button`
width: 26px;
height: 26px;
margin: 0 8px;
color: white;
border-radius: 50%;
background-color: #007065;
border: 1px solid white;
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

const ProductPriceContainer = styled.div`
display: flex;
width: 82px;
`;

const ProductDetails = styled.div`
display: flex;
justify-content: start;
align-items: center;
`;

const OrderDetails = styled.div`
display: flex;
justify-content: end;
align-items: end;
padding: 10px;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
align-items: start;
`;

const ProductInfo = styled.div`
display: flex;
flex-direction: column;
align-items: start;
`;

const ProductTitle = styled.div`
text-align: start;
`;

const ProductPrice = styled(ProductTitle)``;

const ButtonContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
`;

function Cart({cart, removeProductFromCart, countProductsInCart, increaseQuantityInCart, decreaseQuantityInCart, countTotalPrice, clearCart}) {

  const quantityArray = cart.productsInCart.map(product => {
    return product.quantity;
  });
  const totalQuantity = quantityArray.reduce((a, b) => a + b, 0);
  const pricesArray = cart.productsInCart.map(product => {
    return product.price * product.quantity;
  });
  const sumOfPrices = pricesArray.reduce((a, b) => a + b, 0);
  const totalPrice = sumOfPrices + cart.delivery;
  const delivery = cart.delivery;
  const [showPopup, setShowPopup] = useState(false);

  function handleIncreaseQuantity(product){
    const searchedQuantity = {
      id: product.id,
      quantity: product.quantity + 1,
    };
    if((product.quantity < 9)){
      increaseQuantityInCart(searchedQuantity);
      countProductsInCart(totalQuantity + 1);
      countTotalPrice(totalPrice + product.price);
    }
  }
    
  function handleDecreaseQuantity(product){
    const searchedQuantity = {
      id: product.id,
      quantity: product.quantity - 1,
    };
    if(product.quantity > 1){
      decreaseQuantityInCart(searchedQuantity);
      countProductsInCart(totalQuantity - 1);
      countTotalPrice(totalPrice - product.price);
    }
  }

  function handleRemoveProduct(product){
    removeProductFromCart(product);
    countProductsInCart(totalQuantity - product.quantity);
    countTotalPrice(totalPrice - product.price);
  }

  function handleConfirmOrder(){
    setShowPopup(true);
  }

  const allProductsInCart = cart.productsInCart.map(productInCart => {
    return(
      <Item key={uuid()}>
        <Details>
          <ProductDetails>
            <ProductImg src={productInCart.image1}/>
            <ProductInfo>
              <ProductTitle>
                {productInCart.title}
              </ProductTitle>
              <ProductPrice>
                {productInCart.price}zł
              </ProductPrice>
            </ProductInfo>
          </ProductDetails>
          <OrderDetails>
            <QuantityContainer>
              <ButtonChangeQuantity onClick={() => handleDecreaseQuantity(productInCart)}>
                  -
              </ButtonChangeQuantity>
              {productInCart.quantity}
              <ButtonChangeQuantity onClick={() => handleIncreaseQuantity(productInCart)}>
                  +
              </ButtonChangeQuantity>
            </QuantityContainer>
            <ProductPriceContainer>
              <TotalPrice className="cart-totalPrice">
                {(productInCart.quantity * productInCart.price).toFixed(2)}zł
              </TotalPrice>
            </ProductPriceContainer>
          </OrderDetails>
        </Details>
        <IconTrash className="fas fa-trash-alt" onClick={() => handleRemoveProduct(productInCart)}/>
      </Item>
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
  removeProductFromCart: PropTypes.func,
  countProductsInCart: PropTypes.func,
  increaseQuantityInCart: PropTypes.func,
  decreaseQuantityInCart: PropTypes.func,
  countTotalPrice: PropTypes.func,
  clearCart: PropTypes.func,
};

export default Cart;