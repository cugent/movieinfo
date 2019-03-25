import React, { Component } from "react"

const MovieInfo = (props) => {
  return (
    <div className="movieinfo-container">
      <br />
      <br />
      <label>Year: {props.movieData.Year}</label>
      <br />
      <br />
      <label>Director: {props.movieData.Director}</label>
      <br />
      <br />
      <label className="plot">Plot: {props.movieData.Plot}</label>
      <br />
      <br />
      <img src={props.movieData.Poster} />
    </div>
  )
}

export default MovieInfo
