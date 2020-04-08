import React, { Component } from "react";
import "./Moviecard.css";
import {connect} from "react-redux"
import {addMovie, deleteMovie} from "../JS/Actions/actions"
import Rating from "./MovieRating";

class MovieCard extends Component {
  state = {
    source: "",
    name: "",
    direction: "",
    stars: "",
    rating: "",
    modalshown: false
  };
  addMovie = () => {
    this.setState({
      modalshown: !this.state.modalshown
    });
  };
  handleChange = p => {
    this.setState({
      source: p.target.value
    });
  };
  handleChange1 = n => {
    this.setState({
      name: n.target.value
    });
  };
  handleChange2 = d => {
    this.setState({
      direction: d.target.value
    });
  };
  handleChange3 = s => {
    this.setState({
      stars: s.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      modalshown: !this.state.modalshown
    });
    this.props.addMovie({
      name: this.state.name,
      source: this.state.source,
      stars: this.state.stars,
      direction: this.state.direction,
      rating: this.state.rating
    });
  };
  addRating = rating => this.setState({ rating: rating + 1 });
  render() {
    return (
      <div className="CardMovie">
        <button onClick={this.addMovie} className="BtnAdd">
          +
        </button>
        <div
            id="myModal"
            className={this.state.modalshown ? "modal1" : "modal"}>
            <div className="modal-content">
              <form onSubmit={this.handleSubmit}>
                Enter the poster of your movie
                <input onChange={this.handleChange}></input>
                Enter the title
                <input onChange={this.handleChange1}></input>
                Enter who is going to direct
                <input onChange={this.handleChange2}></input>
                And finally who is gonna star in it
                <input onChange={this.handleChange3}></input>
                <Rating addRating={this.addRating} />
                <div className="endModal">
                  <span className="close" onClick={this.addMovie}>
                    &times;
                  </span>
                  <button type="submit">Submit Movie</button>
                </div>
              </form>
            </div>
          </div>      </div>
    );
  }
}

export default connect(null,{addMovie,deleteMovie})(MovieCard)
