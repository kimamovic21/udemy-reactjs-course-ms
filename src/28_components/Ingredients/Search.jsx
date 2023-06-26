import React, { useEffect, useState, useRef } from 'react';
import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilfer] = useState('');
  const inputRef = useRef();

  useEffect(() => { 
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = 
        enteredFilter.length === 0 
          ? '' 
          : `?orderBy="title"&equalTo="${enteredFilter}"`;

        fetch(`https://udemy-react-28-ms-hooks-default-rtdb.firebaseio.com/ingredients.json` + query)
          .then(response => response.json())
          .then(responseData => {
            const loadedIngredients = [];
            for (const key in responseData) {
              loadedIngredients.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount,
              });
            };
          onLoadIngredients(loadedIngredients);  //  props.onLoadIngredients(loadedIngredients);
          });
        };
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
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
