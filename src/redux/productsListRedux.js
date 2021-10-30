export const getProducts = ({products, searchPhrase, price}) => {

  let output = products;
    
  // filter by search phrase
  if(searchPhrase){
    const pattern = new RegExp(searchPhrase, 'i');
    output = output.filter(product => pattern.test(product.title));
  }

  // filter by price
  output = output.filter(product => (product.price >= price.from && product.price <= price.to));

  return output;
};
  