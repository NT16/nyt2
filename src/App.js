import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Books from './components/Books';
import initialState from './initialState';
import reducer from './reducer';
import List from './components/List';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Error from './components/Error';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function fetchData(url, actionType) {
    dispatch({
      type: 'FETCH_INIT'
    });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'FETCH_SUCCESS'
        });

        dispatch({
          type: actionType,
          data: res.results
        });
      }).catch((e) => {
        dispatch({
          type: 'FETCH_FAILURE',
          data: e.message
        })
      })
  }

  useEffect(() => {
    if (state.list.length === 0) {
      fetchData('/api/nyt/lists', 'SAVE_LIST');
    }
  }, [state.list]);

  useEffect( ()=>{
    localStorage.setItem('nyt', JSON.stringify(state.list));
  }, [state.list])

  useEffect( () =>{
    if(state.categoryIndex !== null){
      fetchData(`/api/nyt/categories/${state.list[state.categoryIndex].list_name_encoded}`, 'SAVE_BOOKS');
    }
  }, [state.categoryIndex]);

  function onClick(category) {
    const index = state.list.findIndex(item => item.list_name_encoded === category);
    if (index !== -1) {
      dispatch({
        type: 'SET_CATEGORY_INDEX',
        data: index
      });
    }
  }

  function getPrevious() {
    dispatch({
      type: 'SET_CATEGORY_INDEX',
      data: state.categoryIndex - 1
    });
  }

  function getNext() {
    dispatch({
      type: 'SET_CATEGORY_INDEX',
      data: state.categoryIndex + 1
    });
  }

  function showList() {
    dispatch({
      type: 'SHOW_LIST'
    })
  }

  return (
    <div className="App">
      <header>
        <h1 className ="title">New York Times Bestsellers</h1>
        {
          state.error &&
          <Error message = {state.error} />
        }
        {
          state.loading &&
          <Loading />
        }
      </header>
      
      <div>
        {
          (state.list.length && state.books.length === 0 ) &&
            <List 
              list ={state.list}
              onClick= {onClick} 
            />
        }
        {
          (state.books.length !== 0 ) &&
          <>
            <Navbar 
              getPrevious={getPrevious}
              getNext={getNext}
              showList={showList}
              previous={ state.categoryIndex === 0 ? 
                '' :
                state.list[state.categoryIndex - 1].display_name }
              next={ state.categoryIndex === (state.list.length -1) ? 
                '' :
                state.list[state.categoryIndex + 1].display_name } 
            />

            <Books
              books={state.books} 
            />
          </>
        }
      </div>
    </div>
  );
}

export default App;