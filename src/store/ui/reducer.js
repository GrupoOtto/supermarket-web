export default (state = { search: '', category: '' }, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.search
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.category
      };
    default:
      return state;
  }
};
