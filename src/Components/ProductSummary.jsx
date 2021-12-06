import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import styled from 'styled-components';
import size from '../styles/breakpoints';
import colors from '../styles/colors';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
width: 220px;
height: 330px;
background-color: ${colors.white};
border: 1px solid ${colors.lightgray};
padding: 10px;
transition: transform 0.2s;
&:hover {
    transform: scale(1.06);
    box-shadow: ${colors.shadow};
}
@media (max-width: ${size.lg}){
    width: 265px;
    height: 350px;
}
`;

const Title = styled.div`
color: ${colors.black};
font-weight: bold;
flex-grow: 1;
@media (max-width: ${size.lg}){
    flex-grow: unset;
}
`;

const Price = styled.div`
color: ${colors.green};
font-weight: bold;
align-self: flex-start;
`;

const Tags = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`;

const Tag = styled.p`
background-color: ${colors.dark};
color: ${colors.white};
border-radius: 50px;
font-size: 14px;
padding: 5px 8px;
margin: 3px;
`;

const Image = styled.img`
width: 100%;
height: auto;
max-height: 200px;
object-fit: contain;
@media (max-width: ${size.lg}){
    width: 240px;
}
`;

const ProductSummary = (props) => {

  const { product } = props;
  const tags = product.tags.map(tag => {
    return (
      <Tag key={uuid()}>{tag}</Tag>
    );
  });

  return (
    <li>
      <Link to={{
        pathname: `/product/${product.id}`,
        state: {
          product,
        },
      }} >
        <Container>
          <Image src={product.image1} alt={product.title} width='210' height='165'/>
          <Title>{product.title}</Title>
          <Price>{(product.price).toFixed(2)}zł</Price>
          <Tags>{tags}</Tags>
        </Container>
      </Link>
    </li>
  );
};

ProductSummary.propTypes = {
  product: PropTypes.object,
};

export default React.memo(ProductSummary);