import React, { useEffect, useState, useRef } from 'react';
import Card from '../UI/Card';
import './Search.css';
import useHttp from '../hooks/http';
import ErrorModal from '../UI/ErrorModal';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilfer] = useState('');
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => { 
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = 
          enteredFilter.length === 0 
             ? '' 
             : `?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest(`https://udemy-react-28-ms-hooks-default-rtdb.firebaseio.com/ingredients.json` + query, 'GET')
        
        };
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
      if(!isLoading && !error && data) {
        const loadedIngredients = [];
        for (const key in data) {
          loadedIngredients.push({
            id: key,
            title: data[key].title,
            amount: data[key].amount
          });
        };
        onLoadIngredients(loadedIngredients);
      };
  }, [data, isLoading, error, onLoadIngredients])

  return (
    <section className="search">

      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input 
            type="text" 
            value={enteredFilter}
            onChange={(e) => setEnteredFilfer(e.target.value)}
            ref={inputRef}
          />
        </div>
      </Card>

    </section>
  );
});

export default Search;
