import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchView from "../SearchView/SearchView";
import FavoritesView from '../FavoritesView/FavoritesView.jsx';
import DisplayViews from '../DisplayViews/DisplayViews.jsx';

function App(props) {
  return (
    <Router>
    <div>
      <h1>Giphy Search!</h1>
      <Route exact path='/'>
        <SearchView/>
      </Route>
      <Route exact path='/Favorites'>
        <FavoritesView/>
      </Route>
      <Route exact path='/Favorites'>
        <DisplayViews />
      </Route>
      
    </div>
  </Router>
  );
}

export default App;
