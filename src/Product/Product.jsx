import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SimpleImageSlider from 'react-simple-image-slider';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const SliderContainer = styled.div`
width: 400px;
height: 320px;
margin-right: 20px;
`;

const DescriptionContainer = styled.div`
width: 400px;
height: 320px;
margin-left: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
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


const Product = ({cart, products, addProductToCart}) => {

  const { id } = useParams();
  const product = products.find(product => product.id === Number(id));
  const [itemsAmount, setItemsAmount] = useState(1);
  const images = [
    { url: product.image1 },
    { url: product.image2 },
  ];
  const productToCart = {
    id: product.id,
    image: product.image1,
    title: product.title,
    quantity: itemsAmount,
    price: product.price,
  };

  function handleIncreaseItemsAmount(){
    if(itemsAmount < 9){
      setItemsAmount(prevstate => prevstate + 1);
    }
  }

  function handleDecreaseItemsAmount(){
    if(itemsAmount > 1){
      setItemsAmount(prevstate => prevstate - 1);
    }
  }

  function handleAddProductToCart(){
    if(!cart.productsInCart.some(element => element.id === product.id)){
      addProductToCart(productToCart);
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
          <ButtonChangeAmount onClick={handleDecreaseItemsAmount}>-</ButtonChangeAmount>
          <div>{itemsAmount}</div>
          <ButtonChangeAmount onClick={handleIncreaseItemsAmount}>+</ButtonChangeAmount>
        </AmountContainer>
        <ButtonAddToCart onClick={handleAddProductToCart}>Dodaj do koszyka<IconShoppingCart className="fas fa-shopping-cart"></IconShoppingCart>
        </ButtonAddToCart>
      </DescriptionContainer>
    </Container>
  );
};

Product.propTypes = {
  cart: PropTypes.object,
  products: PropTypes.arrayOf(PropTypes.object),
  addProductToCart: PropTypes.func,
};


export default Product;