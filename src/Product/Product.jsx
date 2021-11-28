import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SimpleImageSlider from 'react-simple-image-slider';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 860px){
    flex-direction: column;
}
`;

const SliderContainer = styled.div`
width: 400px;
height: 320px;
margin-right: 20px;
@media (max-width: 420px){
width: 260px;
height: 208px;
margin-right: 0;
}
`;

const DescriptionContainer = styled.div`
width: 400px;
/* height: 320px; */
margin-left: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
@media (max-width: 420px){
width: 90%;
margin-left: 0;
}
`;

const Title = styled.div`
color: #007065;
font-size: 32px;
font-weight: bold;
`;

const Price = styled.div`
color: green;
font-weight: bold;
font-size: 24px;
`;

const Description = styled.div`
color: black;
text-align: justify;
`;

const AmountContainer = styled.div`
display: flex;
margin-top: 10px;
align-items: center;
`;

const ButtonChangeAmount = styled.button`
width: 26px;
height: 26px;
margin: 0 8px;
color: white;
border-radius: 50%;
background-color: #007065;
border: 1px solid white;
`;

const ButtonAddToCart = styled.button`
color: white;
padding: 5px 10px;
border-radius: 5px;
background-color: #007065;
border: 1px solid white;
width: 50%;
margin: 5px;
`;

const IconShoppingCart = styled.i`
margin-left: 5px;
`;


const Product = ({cart, products, totalQuantity, totalPrice, addProductToCart, countProductsInCart, countTotalPrice}) => {

  const { id } = useParams();
  const product = products.find(product => product.id === Number(id));
  const [itemsQuantity, setItemsQuantity] = useState(1);
  const images = [
    { url: product.image1 },
    { url: product.image2 },
  ];

  function handleIncreaseItemsQuantity(){
    if(itemsQuantity < 9){
      setItemsQuantity(prevstate => prevstate + 1);
    }
  }

  function handleDecreaseItemsQuantity(){
    if(itemsQuantity > 1){
      setItemsQuantity(prevstate => prevstate - 1);
    }
  }

  function handleAddProductToCart(){
    if(!cart.productsInCart.some(element => element.id === product.id)){
      addProductToCart({...product, quantity: itemsQuantity});
      countProductsInCart(totalQuantity + itemsQuantity);
      countTotalPrice(totalPrice + (product.price * itemsQuantity));
    }
  }

  return (
    <Container>
      <SliderContainer>
        <SimpleImageSlider
          width={'inherit'}
          height={'inherit'}
          images={images}
          bgColor="inherit"
          showNavs
          showBullets
        />
      </SliderContainer>
      <DescriptionContainer>
        <Title>{product.title}</Title>
        <Price>{product.price}zł</Price>
        <Description>{product.description}</Description>
        <AmountContainer>
          <div>Ilość:</div>
          <ButtonChangeAmount onClick={handleDecreaseItemsQuantity}>-</ButtonChangeAmount>
          <div>{itemsQuantity}</div>
          <ButtonChangeAmount onClick={handleIncreaseItemsQuantity}>+</ButtonChangeAmount>
        </AmountContainer>
        <ButtonAddToCart onClick={handleAddProductToCart}>Dodaj do koszyka<IconShoppingCart className="fas fa-shopping-cart"></IconShoppingCart>
        </ButtonAddToCart>
      </DescriptionContainer>
    </Container>
  );
};

Product.propTypes = {
  cart: PropTypes.object,
  totalQuantity: PropTypes.number,
  totalPrice: PropTypes.number,
  products: PropTypes.arrayOf(PropTypes.object),
  addProductToCart: PropTypes.func,
  countProductsInCart: PropTypes.func,
  countTotalPrice: PropTypes.func,
};


export default Product;