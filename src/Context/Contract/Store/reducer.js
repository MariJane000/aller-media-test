import {
    SET_CONTRACT,
    SET_CONTRACT_LOADER,
    SET_CONTRACT_DIRECTORY,
    SET_MODAL_LOADER,
} from './constants';

export const initialState = {
    contract: {},
    contractLoader: false,
    contractDirectory: {},
    modalLoader: false,
};

export const reducer = (state, action) => {
    const newState = state ? { ...state } : { ...initialState };
    switch (action.type) {
        case SET_CONTRACT:
            newState.contract = action.contract;
            break;
        case SET_CONTRACT_LOADER:
            newState.contractLoader = action.contractLoader;
            break;
        case SET_CONTRACT_DIRECTORY:
            newState.contractDirectory = action.contractDirectory;
            break;
        case SET_MODAL_LOADER:
            newState.modalLoader = action.modalLoader;
            break;
        default:
            return newState;
    }
    return newState;
};
