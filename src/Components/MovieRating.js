import React, { Component } from 'react'
import './MovieRating.css'

 class MovieRating extends Component {
    state = {
        rating: -1,
        max:5
      }    
    handleClick(i) {
      this.setState({rating: i})
    };
    handleChange=()=>{
    this.props.addRating((this.state.rating))}
    render(){
        const stars = [...Array(this.state.max)]
        return (
            <div>
      {stars.map((s, i) => <label key={i} 
                             onClick={this.handleClick.bind(this, i)}onChange={this.handleChange}
                             className={i <= this.state.rating ? 'star active' : 'star'}>
                   <input type="radio" name="rate" />
                 </label>)}

            </div>
        )
    }}

    export default MovieRating
