const initialState = {
    list: JSON.parse(localStorage.getItem('nyt')) || [],
    books: [],
    error: null,
    loading: false,
    categoryIndex: null
}

export default initialState;