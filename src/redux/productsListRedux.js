export const getProducts = ({products, searchPhrase}) => {

  let output = products;
    
  // filter by search phrase
  if(searchPhrase){
    const pattern = new RegExp(searchPhrase, 'i');
    output = output.filter(product => pattern.test(product.title));
  }

  return output;
};
  