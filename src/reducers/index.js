import { combineReducers } from 'redux';

import { adsReducer } from './adsReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
    isLoading: loadingReducer,
    ads: adsReducer,
    error: errorReducer,
});