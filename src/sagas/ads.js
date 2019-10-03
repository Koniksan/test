import { takeEvery, put, call } from 'redux-saga/effects';
import { ADS } from '../constants';
import { fetchAds } from '../api';
import { setAds, setError } from '../actions';


export default function* watchAdsLoad() {
    yield takeEvery(ADS.LOAD, handleAdsLoad)
}

function* handleAdsLoad() {
    try {
        const data = yield call(fetchAds);
        yield put(setAds(data.ads))
    } catch (error) {
        yield put(setError(error.toString()));
    }

}