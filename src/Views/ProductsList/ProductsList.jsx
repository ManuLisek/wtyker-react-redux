import React from 'react';
import FilterBar from '../../Components/FilterBar/FilterBarContainer';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import uuid from 'react-uuid';
import ProductSummary from '../../Components/ProductSummary';
import size from '../../styles/breakpoints';

const SectionContainer = styled.section`
width: 100%;
display: flex;
@media (max-width: ${size.md}){
    flex-direction: column;
    align-items: center;
}
`;

const List = styled.ul`
display: flex;
flex-wrap: wrap;
width: calc(100% - 240px);
position: relative;
left: 30px;
list-style-type: none;
@media (max-width: ${size.md}){
    align-items: center;
    flex-direction: column;
    width: 100%;
position: static;
}
`;

const NoProductsContainer = styled.div`
text-align: center;
margin-top: 40px;
width: 100%;
`;

const ProductsList = ({products}) => {

  const productsList = products.map(product => (
    <ProductSummary key={product.id} product={product} />
  ));

  return(
    <SectionContainer>
      <FilterBar/>
      <List>
        {productsList.length 
          ? productsList
          : <NoProductsContainer>
            <h3>Przepraszamy, nie znaleziono produktów spełniających podane kryteria.</h3>
          </NoProductsContainer>
        }
      </List>
    </SectionContainer>

  );};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default ProductsList;