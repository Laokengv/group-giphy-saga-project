import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SearchView() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [searchView, setSearchView] = useState("");

    const newSearch = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_FAVORITE', payload: searchView })
        setSearchView("")
        history.push('/displayviews');
    }
    return (
        <div>
            <h1>Search</h1>
            <input type="text" name="name" placeholder="Enter Search" value={searchView}
                onChange={(event) => setSearchView(event.target.value)} />
            <button onClick={newSearch}>Submit</button>
        </div>

    )
}

export default SearchView;