import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function DisplayViews() {
    const [addFavorite, setAddFavorite] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    
    const newFavorite = (event) =>{
        event.preventDefault();
        dispatch({ type: 'ADD_FAVORITE', payload: addFavorite })
        setAddFavorite("")
        history.push('/FavoritesViews');
      }

return(
    <div>
        <h1>Favorites</h1>
        <input type="text" name="name" placeholder="Enter Search" value={newFavorite}
         onChange={(event)=> setAddFavorite(event.target.value)}/>
             <button onClick={newFavorite}>Submit</button>  
    </div>

)
 
    

}

export default DisplayViews;