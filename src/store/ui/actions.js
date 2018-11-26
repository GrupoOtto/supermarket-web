export const setSearch = value => {
  return {
    type: 'SET_SEARCH',
    search: value
  };
};

export const setCategory = category => {
  return {
    type: 'SET_CATEGORY',
    category
  };
};
