import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search.jsx';
import Spinner from './components/Spinner.jsx';
import MovieCard from './components/MovieCard.jsx';
import { useDebounce } from 'react-use';
import { updateSearchCount } from './appwrite.js';

const API_URL = `https://imdb236.p.rapidapi.com/imdb/top250-movies`;
const API_KEY = import.meta.env.VITE_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
  }
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)
  const [filteredMovies, setFilteredMovies] = useState([])
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  useDebounce(() => {
    setDebouncedSearchTerm(searchTerm)}, 500 , [searchTerm]) 


  const fetchMovies = async (query = '') => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, API_OPTIONS);

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.response === 'false') {
        setMovieList([]);
        setErrorMessage(data.error || 'Failed to fetch movies. Please try again.');
        return
      }
      setMovieList(data || []);
      setFilteredMovies(data || []);

      // if(query && data.results.length > 0){
      //   await updateSearchCount(query, data.results[0])
      // }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to fetch movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = movieList.filter((movie) => (
        movie.primaryTitle.toLowerCase().includes(searchTerm.toLowerCase())
      ))
      setFilteredMovies(filtered)
    } else {
      setFilteredMovies(movieList)
    }
  }, [searchTerm, movieList, useDebounce]);

  return (
    <main>
      <div className='pattern'>
        <div className='wrapper'>
          <header>
            <img src="./hero.png" alt="heroPoster" />
            <h1>
              Find <span className='text-gradient'>Movies</span> You'll Enjoy without the Hassle
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          </header>
          <section className='all-movies'>
            <h2 className='mt-[40px]'>All Movies</h2>
          </section>
          {loading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">             
             {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;