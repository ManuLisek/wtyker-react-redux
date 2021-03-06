import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'react-uuid';
import { filtersInitialState } from '../../redux/store';
import Button from '../Button';
import size from '../../styles/breakpoints';
import colors from '../../styles/colors';

const FilterBarContainer = styled.div`
  background-color: ${colors.white};
  box-shadow: ${colors.shadow};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 200px;
  height: fit-content;
  left: 0;
  top: 250px;
  margin: 20px 0 20px 0;
  @media (max-width: ${size.md}) {
    width: 100%;
    letter-spacing: 0.8px;
  }
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

const InputPrice = styled.input`
  max-width: 50px;
  text-align: right;
  margin: 0 4px 0 4px;
`;

function FilterBar({
  filters,
  tags,
  brands,
  changePrice,
  addTag,
  removeTag,
  addBrand,
  removeBrand,
  changeSortingKey,
  clearFilters,
}) {
  function handlePrice(type, value) {
    changePrice(type, value);
  }

  function handleTags(tag, checked) {
    if (checked) {
      addTag(tag);
    } else {
      removeTag(tag);
    }
  }

  function handleBrands(brand, checked) {
    if (checked) {
      filters.checkedBrands.forEach((checkedBrand) => {
        removeBrand(checkedBrand);
      });
      addBrand(brand);
    } else {
      removeBrand(brand);
    }
  }

  function handleSortingKey(e) {
    changeSortingKey(e.target.value);
  }

  function handleClearFilters() {
    clearFilters(filtersInitialState);
  }

  return (
    <FilterBarContainer>
      <FilterBarContent>
        <Label>Cena</Label>
        <Label>
          od:
          <InputPrice
            type="number"
            min="50"
            max="3400"
            value={filters.price.from}
            onChange={(event) => handlePrice('from', event.currentTarget.value)}
          />
          z??
        </Label>
        <Label>
          do:
          <InputPrice
            type="number"
            min="50"
            max="3400"
            value={filters.price.to}
            onChange={(event) => handlePrice('to', event.currentTarget.value)}
          />
          z??
        </Label>
        <details>
          <summary>Filtruj po kategoriach</summary>
          <div>
            {tags.map((tag) => (
              <Label key={uuid()}>
                <Checkbox
                  type="checkbox"
                  checked={filters.checkedTags.indexOf(tag) > -1}
                  onChange={(event) =>
                    handleTags(tag, event.currentTarget.checked)
                  }
                />
                {tag}
              </Label>
            ))}
          </div>
        </details>
        <details>
          <summary>Filtruj po marce</summary>
          <div>
            {brands.map((brand) => (
              <Label key={uuid()}>
                <Checkbox
                  type="checkbox"
                  checked={filters.checkedBrands.indexOf(brand) > -1}
                  onChange={(event) =>
                    handleBrands(brand, event.currentTarget.checked)
                  }
                />
                {brand}
              </Label>
            ))}
          </div>
        </details>
        <Label>Sortuj:</Label>
        <select onChange={handleSortingKey}>
          <option>---</option>
          <option>Alfabetycznie</option>
          <option>Po cenie: rosn??co</option>
          <option>Po cenie: malej??co</option>
        </select>
        <Button onClick={handleClearFilters}>Wyczy????</Button>
      </FilterBarContent>
    </FilterBarContainer>
  );
}

FilterBar.propTypes = {
  filters: PropTypes.object,
  tags: PropTypes.array,
  brands: PropTypes.array,
  changePrice: PropTypes.func,
  addTag: PropTypes.func,
  removeTag: PropTypes.func,
  addBrand: PropTypes.func,
  removeBrand: PropTypes.func,
  changeSortingKey: PropTypes.func,
  clearFilters: PropTypes.func,
};

export default FilterBar;
