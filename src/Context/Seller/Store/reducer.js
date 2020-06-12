import { SET_SELLER } from './constants';

export const initialState = {
    seller: {},
};

export const reducer = (state, action) => {
    const newState = state ? { ...state } : { ...initialState };

    switch (action.type) {
        case SET_SELLER:
            newState.seller = action.seller;
            break;
        default:
            return newState;
    }

    return newState;
};
