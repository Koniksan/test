import { ADS } from '../constants';

export const errorReducer = (state = null, action) => {
    switch (action.type) {
        case ADS.LOAD_FAIL: return action.payload;
        case ADS.LOAD: 
        case ADS.LOAD_SUCCESS: return null;
        default: return state;
    }
}