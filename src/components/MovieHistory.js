import React, { Component } from "react";

const MovieInfo = props => {
  return (
    <div className="movieinfo-container">
      <h1>History</h1>
      {props.history.map((movie, index) => {
        return (
          <div>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
            <button onClick={() => props.deleteHistoryItem(movie.id)}>Delete this {movie.id}</button>
          </div>
        );
      })}
    </div>
  );
};

export default MovieInfo;
