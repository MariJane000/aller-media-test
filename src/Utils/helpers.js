import { CONTRACT_STATUS } from '@Context/Contract/Store/constants';
import { get, toNumber } from 'lodash';

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};

const goBack = () => {
    window.history.back();
};

const checkIsContractFinished = (contract) => {
    const status = get(contract, 'status', '');
    return status ? status === CONTRACT_STATUS.INACTIVE : null;
};

const numberFieldValidator = (value, errorMsg) => {
    if (!isNaN(toNumber(value))) {
        return Promise.resolve();
    }

    return Promise.reject(errorMsg);
};

export { updateObject, goBack, checkIsContractFinished, numberFieldValidator };
