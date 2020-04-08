import React, { Component } from 'react'
import {connect} from "react-redux"
import './Description.css'  

 class Description extends Component {
    render() {
        if (!this.props.MovieArray) {
            return (<p>there's no movie</p>) ;
          }
          const [MovieArray] = this.props.MovieArray.filter(
              el => el.id === this.props.match.params.id
            );
        return (
            <div>
            <h1 className="title">Description</h1>
            <p className="desc">{MovieArray.description}</p>
            </div>
        )
    }
}
const mapStateToProps= state=>{
    return{
        MovieArray:state.movieReducer.MovieArray
    }

}
export default connect(mapStateToProps)(Description)
