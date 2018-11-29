import history from '../history';

export const filterPrice = (products, priceRange) => {
  const min = priceRange[0];
  const max = priceRange[1];
  return products.filter(p => p.final >= min && p.final <= max);
};

export const filterSearch = products => {
  let search = history.location.search;
  if (!search) {
    return products;
  }
  search = search.split('=')[1].toUpperCase();
  return products.filter(p => p.name.toUpperCase().includes(search));
};

export const filterCategory = products => {
  let path = history.location.pathname;
  if (!path.startsWith('/category')) {
    return products;
  }
  let category = path.split('/')[2].toUpperCase();
  return products.filter(p => p.type.description.toUpperCase() === category);
};

export const filterProducts = (all, priceRange) => {
  let products = all;
  products = filterSearch(products);
  products = filterCategory(products);
  products = filterPrice(products, priceRange);

  return products;
};
