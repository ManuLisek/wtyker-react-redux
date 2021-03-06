import React, {useState} from 'react';
import Button from '../../Components/Button';
import RoundButton from '../../Components/RoundButton';
import {useParams} from 'react-router-dom';
import Popup from '../../Components/Popup';
import PropTypes from 'prop-types';
import SimpleImageSlider from 'react-simple-image-slider';
import styled from 'styled-components';
import size from '../../styles/breakpoints';
import colors from '../../styles/colors';

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: ${size.lg}){
    flex-direction: column;
}
`;

const SliderContainer = styled.div`
width: 400px;
height: 320px;
margin-right: 20px;
@media (max-width: ${size.md}){
    width: 260px;
    height: 208px;
    margin-right: 0;
}
`;

const DescriptionContainer = styled.div`
width: 400px;
margin-left: 10px;
margin-right: 15px;
display: flex;
flex-direction: column;
justify-content: flex-start;
@media (max-width: ${size.md}){
    width: 90%;
    margin: 0;
}
`;

const Title = styled.div`
color: ${colors.secondary};
font-size: 32px;
font-weight: bold;
`;

const Price = styled.div`
color: ${colors.green};
font-weight: bold;
font-size: 24px;
`;

const Description = styled.div`
color: ${colors.black};
text-align: justify;
`;

const AmountContainer = styled.div`
display: flex;
margin-top: 10px;
align-items: center;
`;

const ProductQuantity = styled.div`
width: 8px;
height: 25px;
`;

const ButtonContainer = styled.div`
width: 50%;
`;

const IconShoppingCart = styled.i`
margin-left: 5px;
`;

const Product = ({cart, products, totalQuantity, totalPrice, addProductToCart, countProductsInCart, countTotalPrice}) => {

  const { id } = useParams();
  const product = products.find(product => product.id === Number(id));
  const [itemsQuantity, setItemsQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
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
    } else{
      setShowPopup(true);
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
        <Price>{product.price}z??</Price>
        <Description>{product.description}</Description>
        <AmountContainer>
          <div>Ilo????:</div>
          <RoundButton onClick={handleDecreaseItemsQuantity}>-</RoundButton>
          <ProductQuantity>{itemsQuantity}</ProductQuantity>
          <RoundButton onClick={handleIncreaseItemsQuantity}>+</RoundButton>
        </AmountContainer>
        <ButtonContainer>
          <Button onClick={handleAddProductToCart}>Dodaj do koszyka<IconShoppingCart className="fas fa-shopping-cart"></IconShoppingCart>
          </Button>
        </ButtonContainer>
      </DescriptionContainer>
      <Popup trigger={showPopup} closePopup={()=> setShowPopup(false)}>
        <h3>Ten produkt jest ju?? w koszyku</h3>
      </Popup>
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