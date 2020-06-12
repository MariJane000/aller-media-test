import api from '../../../../Framework/Api/api';
import { CONTRACTS_REQUEST } from './constants';

export const getBuyerContracts = (status, params = {}, config = {}) => {
    const baseObj = {
        url: `contracts/${CONTRACTS_REQUEST[status]}`,
        params,
        config,
    };
    return api.get(baseObj);
};

export const getSellerContracts = (status, params = {}, config = {}) => {
    const baseObj = {
        url: `seller-contracts/${CONTRACTS_REQUEST[status]}`,
        params,
        config,
    };
    return api.get(baseObj);
};
