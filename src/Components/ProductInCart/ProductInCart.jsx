import React from 'react';
import RoundButton from '../RoundButton';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-child(even) {
    background-color: ${colors.light};
  }
`;

const TotalPrice = styled.div`
  height: 25px;
  min-width: 90px;
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  color: ${colors.green};
`;

const ProductImg = styled.img`
  padding: 5px;
  width: 70px;
  height: 57px;
`;

const IconTrash = styled.i`
  color: ${colors.secondary};
  padding: 3px;
  min-width: 70px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${colors.secondaryHovered};
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  width: 100px;
`;

const ProductQuantity = styled.div`
  width: 8px;
  height: 25px;
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
  font-weight: 700;
`;

const ProductPrice = styled(ProductTitle)``;

const ProductInCart = ({
  productInCart,
  totalQuantity,
  totalPrice,
  removeProductFromCart,
  countProductsInCart,
  increaseQuantityInCart,
  decreaseQuantityInCart,
  countTotalPrice,
}) => {
  const productTotalPrice = `${(
    productInCart.quantity * productInCart.price
  ).toFixed(2)}zł`;

  function handleIncreaseQuantity() {
    if (productInCart.quantity < 9) {
      increaseQuantityInCart(productInCart);
      countProductsInCart(totalQuantity + 1);
      countTotalPrice(totalPrice + productInCart.price);
    }
  }

  function handleDecreaseQuantity(productInCart) {
    if (productInCart.quantity > 1) {
      decreaseQuantityInCart(productInCart);
      countProductsInCart(totalQuantity - 1);
      countTotalPrice(totalPrice - productInCart.price);
    }
  }

  function handleRemoveProduct(productInCart) {
    removeProductFromCart(productInCart);
    countProductsInCart(totalQuantity - productInCart.quantity);
    countTotalPrice(totalPrice - productInCart.price);
  }

  return (
    <Item>
      <Details>
        <ProductDetails>
          <ProductImg src={productInCart.image1} alt={productInCart.title} />
          <ProductInfo>
            <ProductTitle>{productInCart.title}</ProductTitle>
            <ProductPrice>{productInCart.price}zł</ProductPrice>
          </ProductInfo>
        </ProductDetails>
        <OrderDetails>
          <QuantityContainer>
            <RoundButton onClick={() => handleDecreaseQuantity(productInCart)}>
              -
            </RoundButton>
            <ProductQuantity>{productInCart.quantity}</ProductQuantity>
            <RoundButton onClick={() => handleIncreaseQuantity(productInCart)}>
              +
            </RoundButton>
          </QuantityContainer>
          <ProductPriceContainer>
            <TotalPrice className="cart-totalPrice">
              {productTotalPrice}
            </TotalPrice>
          </ProductPriceContainer>
        </OrderDetails>
      </Details>
      <IconTrash
        className="fas fa-trash-alt"
        onClick={() => handleRemoveProduct(productInCart)}
      />
    </Item>
  );
};

ProductInCart.propTypes = {
  productInCart: PropTypes.object,
  totalQuantity: PropTypes.number,
  totalPrice: PropTypes.number,
  removeProductFromCart: PropTypes.func,
  countProductsInCart: PropTypes.func,
  increaseQuantityInCart: PropTypes.func,
  decreaseQuantityInCart: PropTypes.func,
  countTotalPrice: PropTypes.func,
};

export default ProductInCart;
