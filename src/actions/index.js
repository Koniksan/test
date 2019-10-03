import { ADS } from '../constants';

export const loadAds = () => ({
    type: ADS.LOAD,
});

export const setAds = ads => ({
    type: ADS.LOAD_SUCCESS,
    payload: ads
})

export const setError = error => ({
    type: ADS.LOAD_FAIL,
    payload: error
})