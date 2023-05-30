import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './MoviesList';
import './App14.css';
import AddMovie from './AddMovie';

function App14() {

  const [movies, setMovies] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);    
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async function() {
    setIsLoading(true);
    setError(null);
    try {
        const response = await fetch('https://udemy-react-14-ms-http-default-rtdb.firebaseio.com/movies.json');
        console.log(response);
        
        if(!response.ok) {
            throw new Error(`Something went wrong!`);
        };

        const data = await response.json()
        console.log(data);

        const loadedMovies = [];

        for (const key in data) {
            loadedMovies.push({
                id: key,
                title: data[key].title,
                openingText: data[key].openingText,
                releaseDate: data[key].openingText,
            });
        };  
            setMovies(loadedMovies);
        }
        catch (error) {
            setError(error.message);
        };
    setIsLoading(false);
  }, []);

  useEffect( () => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    // console.log(movie);
    const response = await fetch('https://udemy-react-14-ms-http-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    console.log(data);
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  };

  if (error) {
    content = <p>{error}</p>;
  };

  if (isLoading) {
    content = <p>Loading...</p>;
  };

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>} */}
        {/* {isLoading && <p>Loading... </p>} */}
        {/* {!isLoading && error && <p>{error}</p>} */}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />} */}
        {content}
      </section>
    </React.Fragment>
  );
};

export default App14;
