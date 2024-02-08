import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";
import MovieDetails from "./MovieDetails";
import "./style.css";
import SearchIcon from "./searchIcon.svg";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=97c234ba";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const findMovie = async (movieName) => {
    const response = await fetch(`${API_URL}&s=${movieName}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    findMovie(searchTerm);
  }, [searchTerm]);

  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      <h1>
        <a href="index.html">CineJunction</a>
      </h1>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for Movies/Series"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img
          src={SearchIcon}
          alt="searchingIcon"
          onClick={() => findMovie(searchTerm)}
        />
      </div>

      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onClose={closeMovieDetails} />
      ) : searchTerm !== "" && movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieComponent
              movie={movie}
              onClick={() => openMovieDetails(movie)}
            />
          ))}
        </div>
      ) : searchTerm !== "" ? (
        <div className="no-results-found">
          <h2>Sorry, no movies of the title "{searchTerm}" were found</h2>
        </div>
      ) : null}
    </div>
  );
}

export default App;
