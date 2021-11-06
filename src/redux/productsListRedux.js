export const getProducts = ({products, searchPhrase, price, checkedTags, checkedBrands, sortingKey}) => {

  let output = products;
    
  // filter by search phrase
  if(searchPhrase){
    const pattern = new RegExp(searchPhrase, 'i');
    output = output.filter(product => pattern.test(product.title));
  }

  // filter by price
  output = output.filter(product => (product.price >= price.from && product.price <= price.to));

  //filter by tags
  output = output.filter(product => checkedTags.every(tag => product.tags.indexOf(tag) > -1));

  //filter by brands
  output = output.filter(product => checkedBrands.every(brand => product.brand.indexOf(brand)  > -1));

  //sorting by sorting key
  if(sortingKey === 'Alfabetycznie'){
    output = output.sort(function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    });
  } else if(sortingKey === 'Po cenie: rosnąco'){
    output.sort( function( a , b){
      if(a.price > b.price) return 1;
      if(a.price < b.price) return -1;
      return 0;
    });
  } else if(sortingKey === 'Po cenie: malejąco'){
    output.sort( function( a , b){
      if(a.price > b.price) return -1;
      if(a.price < b.price) return 1;
      return 0;
    });
  }

  return output;
};
  