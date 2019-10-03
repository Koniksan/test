import { ADS } from "../constants";

const initialState = []

export const adsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADS.LOAD_SUCCESS: return [...state, ...action.payload];
        default: return state;
    }
}