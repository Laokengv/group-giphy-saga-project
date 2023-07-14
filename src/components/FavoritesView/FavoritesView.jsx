import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FavoritesView() {
    const [viewFavorite, setViewFavorite] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

     


}

export default FavoritesView;