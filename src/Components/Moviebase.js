import React from "react";
import Rating from './Rating'
import {connect} from "react-redux"
import {deleteMovie} from "../JS/Actions/actions"
import MovieModal from'./MovieModal'
import { Link} from "react-router-dom"

 function Moviebase({ deleteMovie,moviesItems }) {
  return (
    <div className="moviesoffered">
      {moviesItems && moviesItems.map((el, i) => (
        <div className="CardMovie" key={i}>
          <img className="Poster" src={el.source} />
          <div className="Moviedescription">
            <h5>{el.name}</h5>
            <h6>With {el.stars}</h6>
            <p>Directed by: {el.direction}</p>
            <Rating rating={el.rating}/></div><div className="btncontainer">
            <button onClick={()=>{deleteMovie(el.id)}}
            className="delbutton">Delete</button>
          <MovieModal
          movie={el}/>
          <Link to={`/description/${el.id}`}>Read Description</Link>
        </div></div>
        
      ))}
      
    </div>
  );
}
export default connect(null,{deleteMovie})(Moviebase)
