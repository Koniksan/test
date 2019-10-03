import { ADS } from '../constants';

export const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case ADS.LOAD: return true;
        case ADS.LOAD_SUCCESS: 
        case ADS.LOAD_FAIL: return false;
        default: return state;
    }
}