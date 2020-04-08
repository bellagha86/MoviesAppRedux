import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import MovieContainer from "../../Components/MovieContainer"
import Description from '../../Components/Description'


const AppRouter = () => (
    <Router>
      <Switch>
        <Route path="/" exact component={MovieContainer} />
   <Route path="/description/:id" exact component={Description} />
      </Switch>
    </Router>
  );
export default AppRouter
