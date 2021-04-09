function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT': return {
      ...state,
      loading: true,
      error: null
    };
    case 'FETCH_SUCCESS': return {
      ...state,
      loading: false,
      error: null
    }
    case 'FETCH_FAILURE': return {
      ...state,
      loading: false,
      error: action.data
    };
    case 'SAVE_LIST': return {
      ...state,
      list: action.data
    };
    case 'SAVE_BOOKS': return {
      ...state,
      books: action.data
    };
    case 'SET_CATEGORY_INDEX': return {
      ...state,
      categoryIndex: action.data
    };
    case 'SHOW_LIST': return {
      ...state,
      books: [],
      categoryIndex: null,
      error: null
    }
    default: return state;
  }
}

export default reducer;