import React from 'react';
import ProductSummary from '../ProductSummary';
import FilterBar from '../FilterBar/FilterBarContainer';
import PropTypes from 'prop-types';
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


const ProductsList = ({products}) => {

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

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default ProductsList;