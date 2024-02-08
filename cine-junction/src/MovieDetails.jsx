import React from "react";

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="movie-details-overlay">
      <div className="movie-details">
        <div className="details-header">
          <h2>{movie.Title}</h2>
          <button className="close-icon" onClick={onClose}>
            X
          </button>
        </div>
        <div className="details-content">
          <div>
            <h3>
              <span>Type : </span>
              {movie.Type}
            </h3>
            <h3>
              {" "}
              <span>Year of Release : </span> {movie.Year}
            </h3>
            <h3 className="description">
              <span> Description : </span>
              "Sample Text - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </h3>
          </div>
          <div>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie.Title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
