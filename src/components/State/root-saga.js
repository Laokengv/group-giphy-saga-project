import { takeEvery, put } from "redux-saga/effects";


function* fetchFavoriteSaga() {
    try {
        const response = yield fetch('/api/favorite');
        const favorites = yield response.json();
        yield put({ type: 'ADD_FAVORITE', payload: favorites })
    } catch (error) {
        console.log(error);
    }
}



function* rootSaga() {
    yield takeEvery('FETCH_FAVORITE', fetchFavoriteSaga);
}

export default rootSaga;

// MVT0E2tDRQHmgVXwmq2UGdPaNyijpqH4 - **** API KEY ****