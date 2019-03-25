const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

let movieInfo;
let history;

app.use(express.static("./build/"));

app.get("/movie/:movieTitle", (request, response) => {
  axios
    .get(`http://www.omdbapi.com/?t=${request.params.movieTitle}&apikey=fd82d3db`)
    .then(response => {
      movieInfo = response.data;
      let object = {
        title: movieInfo.Title,
        year: movieInfo.Year
      };
      axios.post("http://5c993b9e4236560014393254.mockapi.io/moviehistory", object).then(response => {
        axios.get("http://5c993b9e4236560014393254.mockapi.io/moviehistory").then(response => {
          history = response.data;
        });
      });
    })
    .catch(error => {
      console.log(error);
    });
  response.json({
    payload: movieInfo,
    status: true,
    history: history
  });
});

app.delete("/movie/:id", (request, response) => {
  axios.delete(`http://5c993b9e4236560014393254.mockapi.io/moviehistory/${request.params.id}`).then(response => {
    axios.get("http://5c993b9e4236560014393254.mockapi.io/moviehistory").then(response => {
      history = response.data;
    });
  });
  response.json({
    status: true,
    history: history
  });
});

app.listen(1337, () => {
  console.log("Server restarted...");
});
