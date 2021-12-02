import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 220px;
height: 300px;
background-color: white;
border: 1px solid lightgray;
padding: 10px;
transition: transform 0.2s;
&:hover {
    transform: scale(1.06);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
@media (max-width: 700px){
    width: 265px;
height: 360px;
}
`;
const Title = styled.div`
color: black;
font-weight: bold;
`;
const Price = styled.div`
color: green;
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
background-color: #5f6670;
color: white;
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
@media (max-width: 700px){
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
    <Link to={{
      pathname: `/product/${product.id}`,
      state: {
        product,
      },
    }} >
      <Container>
        <Image src={product.image1} width="200" height="156" alt={product.title}/>
        <Title>{product.title}</Title>
        <Price>{product.price}zł</Price>
        <Tags>{tags}</Tags>
      </Container>
    </Link>
  );
};

ProductSummary.propTypes = {
  product: PropTypes.object,
};

export default ProductSummary;