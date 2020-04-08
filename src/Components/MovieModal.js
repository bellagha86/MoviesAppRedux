import React, { Component } from 'react'
import Rating from "./MovieRating";
import './MovieModal.css'
import {connect} from "react-redux"
import {editMovie} from '../JS/Actions/actions'

 class MovieModal extends Component {
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
        this.props.editMovie({
        source: this.state.source,
        name: this.state.name,
        direction: this.state.direction,
        stars: this.state.stars,
        rating: this.state.rating,
        id:this.props.movie.id
        })

        }
      
    
    render() {
        return (<div>
          <button onClick={this.addMovie} className="delbutton">
          Edit
        </button>
            <div
            id="myModal"
            className={this.state.modalshown ? "modal1" : "modal"}>
            <div className="modal-content">
              <form onSubmit={this.handleSubmit}>
                Enter the poster of your movie:
                <input onChange={this.handleChange}></input>
                Enter the title:
                <input onChange={this.handleChange1}></input>
                Enter who is going to direct:
                <input onChange={this.handleChange2}></input>
                And finally who is gonna star in it:
                <input onChange={this.handleChange3}></input>
                <Rating addRating={this.addRating} />
                <div className="endModal">
                  <span className="close">
                    &times;
                  </span>
                  <button type="submit" onClick={this.editMovie}>Submit Movie</button>
                </div>
              </form>
            </div>
          </div>
          </div>
        )
    }
}
export default connect(null,{editMovie})( MovieModal)