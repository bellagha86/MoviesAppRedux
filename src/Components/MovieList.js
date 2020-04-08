import React, { Component } from 'react'
import './MovieList.css'
import MovieCard from'./MovieCard'
import Moviebase from './Moviebase'



class MovieList extends Component {
    // state={
    //     movies:this.props.filteredMovie,
      
    // }
//    addMovie = (newMovie)=>this.setState({movies : [newMovie , ...this.state.movies]})

    render() {
        
        // console.log(this.state.movies)
        return (
            <div>
                <h4 className="MoviesTitle">What we can so offer so far</h4>
                <hr/>
                <Moviebase moviesItems={this.props.MovieArray} rating={this.props.MovieArray.rating}/>
                <MovieCard addMovie= {this.props.addMovie}/>
            </div>
        )
    }
}
export default MovieList