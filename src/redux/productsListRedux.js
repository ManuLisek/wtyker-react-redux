export const getFilteredProducts = ({ products, filters }) => {
  let output = products;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter((product) => pattern.test(product.title));
  }

  // filter by price
  output = output.filter(
    (product) =>
      product.price >= filters.price.from && product.price <= filters.price.to
  );

  //filter by tags
  output = output.filter((product) =>
    filters.checkedTags.every((tag) => product.tags.indexOf(tag) > -1)
  );

  //filter by brands
  output = output.filter((product) =>
    filters.checkedBrands.every((brand) => product.brand.indexOf(brand) > -1)
  );

  //sorting by sorting key
  if (filters.sortingKey === 'Alfabetycznie') {
    output = output.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  } else if (filters.sortingKey === 'Po cenie: rosnąco') {
    output.sort(function (a, b) {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
  } else if (filters.sortingKey === 'Po cenie: malejąco') {
    output.sort(function (a, b) {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    });
  }

  return output;
};
