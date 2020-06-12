import {
    SET_CONTRACT,
    SET_CONTRACT_LOADER,
    SET_CONTRACT_DIRECTORY,
    SET_MODAL_LOADER,
} from './constants';

export const setContract = (contract) => ({
    type: SET_CONTRACT,
    contract,
});

export const setContractLoader = (contractLoader) => ({
    type: SET_CONTRACT_LOADER,
    contractLoader,
});

export const setContractDirectory = (contractDirectory) => ({
    type: SET_CONTRACT_DIRECTORY,
    contractDirectory,
});

export const setModalLoader = (modalLoader) => ({
    type: SET_MODAL_LOADER,
    modalLoader,
});
