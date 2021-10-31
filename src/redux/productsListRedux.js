export const getProducts = ({products, searchPhrase, price, checkedTags}) => {

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

  return output;
};
  