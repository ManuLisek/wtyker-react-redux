import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'react-uuid';

const FilterBarContainer = styled.div`
background-color: white;
padding: 5px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 5px;
display: flex;
justify-content: center;
padding: 10px;
width: 200px;
height: fit-content;
position: absolute;
left: 0;
top: 250px;
margin: 20px 0 40px 0;
`;

const FilterBarContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
margin: 4px;
display: block;
`;

const Checkbox = styled.input`
margin-right: 3px;
`;

const ButtonClear = styled.button`
background-color: #007065;
color: white;
border: none;
border-radius: 5px;
padding: 10px 20px;
margin: 20px;
display: block;
`;

const InputPrice = styled.input`
max-width: 50px;
text-align: right;
margin: 0 4px 0 4px;
`;


function FilterBar({products, changePrice, price, checkedTags, addTag, removeTag, checkedBrands, addBrand, removeBrand, changeSortingKey}) {

  const allTags = [];
  const allBrands = [];
  
  products.forEach(product => {
    allTags.push(...product.tags);
    allBrands.push(product.brand);
  });
  
  const tags = [...new Set(allTags)];
  const brands = [...new Set(allBrands)];

  function handlePrice(type, value){
    changePrice(type, value);
  }

  function handleTags(tag, checked){
    if(checked) {
      addTag(tag);
    } else {
      removeTag(tag);
    }
  }

  function handleBrands(brand, checked){
    if(checked) {
      checkedBrands.forEach(checkedBrand => {
        removeBrand(checkedBrand);
      });
      addBrand(brand);
    } else {
      removeBrand(brand);
    }
  }

  function handleSortingKey(e){
    changeSortingKey(e.target.value);
  }

  return (
    <FilterBarContainer>
      <FilterBarContent>
        <Label>
        Cena 
        </Label>
        <Label>
                od:
          <InputPrice type='number'  min='50' max='3400' value={price.from} onChange={event => handlePrice('from', event.currentTarget.value)}/>
        zł
        </Label>
        <Label>
                do:
          <InputPrice type='number' min='50' max='3400'  value={price.to} onChange={event => handlePrice('to', event.currentTarget.value)}/>
        zł
        </Label>
        <details>
          <summary>Filtruj po kategoriach</summary>
          <div>
            {tags.map(tag => (
              <Label key={uuid()}>
                <Checkbox type='checkbox' checked={checkedTags.indexOf(tag) > -1} onChange={event => handleTags(tag, event.currentTarget.checked)} />
                {tag}
              </Label>
            ))}
          </div>
        </details>
        <details>
          <summary>Filtruj po marce</summary>
          <div>
            {brands.map(brand => (
              <Label key={uuid()}>
                <Checkbox type='checkbox' checked={checkedBrands.indexOf(brand) > -1} onChange={event => handleBrands(brand, event.currentTarget.checked)}/>
                {brand}
              </Label>
            ))}
          </div>
        </details>
        <Label>Sortuj:</Label>
        <select onChange={handleSortingKey}>
          <option>---</option>
          <option>Alfabetycznie</option>
          <option>Po cenie: rosnąco</option>
          <option>Po cenie: malejąco</option>
        </select>
        <ButtonClear>Wyczyść</ButtonClear>
      </FilterBarContent>
    </FilterBarContainer>
  );
}

FilterBar.propTypes = {
  products: PropTypes.array,
  changePrice: PropTypes.func,
  price: PropTypes.object,
  checkedTags: PropTypes.array,
  addTag: PropTypes.func,
  removeTag: PropTypes.func,
  checkedBrands: PropTypes.array,
  addBrand: PropTypes.func,
  removeBrand: PropTypes.func,
  changeSortingKey: PropTypes.func,
};

export default FilterBar;