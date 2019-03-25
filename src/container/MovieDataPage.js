import React, { Component } from "react";
import Axios from "axios";
import MovieInfo from "../components/MovieInfo";
import MovieHistory from "../components/MovieHistory";
class MovieDataPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: {},
      inputBox: "",
      history: []
    };
  }

  search = () => {
    Axios.get(`/movie/${this.state.inputBox}`)
      .then(response => {
        console.log(response);
        this.setState({ movieData: response.data.payload, history: response.data.history });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteHistoryItem = id => {
    Axios.delete(`/movie/${id}`).then(response => {
      this.setState({ history: response.data.history });
    });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Movie Data</h1>
        <input id="inputBox" type="text" placeholder="Title" onChange={this.handleChange} />
        <button onClick={this.search} disabled={this.state.inputBox === ""}>
          Search
        </button>
        <br />
        <MovieInfo movieData={this.state.movieData} />
        <MovieHistory deleteHistoryItem={this.deleteHistoryItem} history={this.state.history} />
      </div>
    );
  }
}

export default MovieDataPage;
