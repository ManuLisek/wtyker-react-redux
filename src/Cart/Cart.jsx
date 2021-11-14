import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import styled from 'styled-components';

const Container = styled.div`
width: 60%;
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
`;


const Table = styled.table`
width: 100%;
border-spacing: 0;
padding: 10px;
min-height: 200px;
height: 1%;
`;

const Tr = styled.tr`
&:nth-child(even){
    background-color: #ddd;
}
`;

const Td = styled.td`
padding: 1%;
`;

const TotalPrice = styled(Td)`
font-weight: bold;
color: green;
`;

const CartProduct = styled(Td)`
text-align: left;
margin-left: 10px;
`;

const ProductImg = styled.img`
width: 30px;
height: auto;
`;

const IconTrash = styled.i`
color: #007065;
padding: 8px;
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
`;

const OrderSummary = styled.div`
display: flex;
text-align: right;
`;

const Description = styled.p`
flex: 6;
`;

const Amount = styled.p`
flex: 2;
margin-right: 10px;
`;

const ButtonConfirm = styled.button`
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

const AmountContainer = styled.div`
display: flex;
min-width: 90px;
`;

const ButtonChangeAmount = styled.button`
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


function Cart({cart, removeProductFromCart, countProductsInCart, increaseQuantityInCart, decreaseQuantityInCart}) {

  const quantityArray = cart.productsInCart.map(product => {
    return product.quantity;
  });
  const quantity = quantityArray.reduce((a, b) => a + b, 0);

  function handleIncreaseQuantity(product){
    const searchedQuantity = {
      id: product.id,
      quantity: product.quantity + 1,
    };
    if((product.quantity < 9)){
      increaseQuantityInCart(searchedQuantity);
      countProductsInCart(quantity + 1);
    }
  }
    
  function handleDecreaseQuantity(product){
    const searchedQuantity = {
      id: product.id,
      quantity: product.quantity - 1,
    };
    if(product.quantity > 1){
      decreaseQuantityInCart(searchedQuantity);
      countProductsInCart(quantity - 1);
    }
  }

  function handleRemoveProduct(product){
    removeProductFromCart(product);
    countProductsInCart(quantity - product.quantity);
  }

  const allProductsInCart = cart.productsInCart.map(productInCart => {
    return(
      <Tr key={uuid()}>
        <Td><ProductImg src={productInCart.image1}/></Td>
        <CartProduct>{productInCart.title}</CartProduct>
        <Td>{productInCart.price}zł</Td>
        <Td>
          <AmountContainer>
            <ButtonChangeAmount onClick={() => handleDecreaseQuantity(productInCart)}>-</ButtonChangeAmount>
            {productInCart.quantity}
            <ButtonChangeAmount onClick={() => handleIncreaseQuantity(productInCart)}>+</ButtonChangeAmount>
          </AmountContainer>
        </Td>
        <TotalPrice className="cart-totalPrice">{productInCart.price}</TotalPrice>
        <Td><IconTrash className="fas fa-trash-alt" onClick={() => handleRemoveProduct(productInCart)}></IconTrash>
        </Td>
      </Tr>
    );
  });


  return (
    <Container>
      <Table>
        <tbody>
          {allProductsInCart}
        </tbody>
      </Table>
      <OrderContainer>
        <OrderSummary>
          <Description>Koszt dostawy:</Description>
          <Amount>20zł</Amount>
        </OrderSummary>
        <OrderSummary>
          <Description>Wartość zamówienia:</Description>
          <Amount>99zł</Amount>
        </OrderSummary>
        <ButtonConfirm>Zatwierdź zamówienie</ButtonConfirm>
      </OrderContainer>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
  removeProductFromCart: PropTypes.func,
  countProductsInCart: PropTypes.func,
  increaseQuantityInCart: PropTypes.func,
  decreaseQuantityInCart: PropTypes.func,
};

export default Cart;