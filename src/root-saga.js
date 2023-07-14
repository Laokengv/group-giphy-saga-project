import{ takeEvery, put } from "redux-saga/effects";
function* rootSaga() {
yield takeEvery('FETCH_FAVORITE', fetchFavoriteSaga);
}

function*  fetchFavoriteSaga(){
    try {
        const response = yield fetch('/api/favorite');
        const favorites = yield response.json();
        yield put({ type: 'ADD_FAVORITE', payload: favorites})
     } catch (error) {
         console.log(error);
     }
 }






export  default rootSaga;