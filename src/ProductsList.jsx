import React from 'react';
import ProductSummary from './ProductSummary';
import FilterBar from './FilterBar';
import {products} from './products/products';
import styled from 'styled-components';
import uuid from 'react-uuid';

const SectionContainer = styled.section`
width: 100%;
display: flex;
justify-content: center;
`;

const List = styled.ul`
display: flex;
flex-wrap: wrap;
width: 880px;
position: relative;
list-style-type: none;
`;


const ProductsList = () => {

  const productsList = products.map(product => (
    <ProductSummary key={uuid()} product={product} />
  ));
  return(
    <SectionContainer>
      <FilterBar/>
      <List>
        {productsList}
      </List>
    </SectionContainer>

  );};

export default ProductsList;