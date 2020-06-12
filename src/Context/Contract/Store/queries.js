import api from '../../../../Framework/Api/api';

// contract
export const getBuyerContract = (id) => {
    const baseObj = {
        url: `contracts/${id}`,
        data: {},
    };
    return api.get(baseObj);
};

export const getSellerContract = (id) => {
    const baseObj = {
        url: `seller-contracts/${id}`,
        data: {},
    };
    return api.get(baseObj);
};

export const changeBuyerContractStatus = (id, payload) => {
    const baseObj = {
        url: `contracts/archive/${id}`,
        data: {
            ...payload,
        },
    };
    return api.put(baseObj);
};

export const changeSellerContractStatus = (id, payload) => {
    const baseObj = {
        url: `seller-contracts/archive/${id}`,
        data: {
            ...payload,
        },
    };
    return api.put(baseObj);
};

export const getDirectory = () => {
    const baseObj = {
        url: 'contracts/directory',
        data: {},
    };
    return api.get(baseObj);
};

export const addBuyerContract = (payload) => {
    const baseObj = {
        url: 'contracts',
        data: {
            ...payload,
        },
    };
    return api.post(baseObj);
};

export const addSellerContract = (payload) => {
    const baseObj = {
        url: 'seller-contracts',
        data: {
            ...payload,
        },
    };
    return api.post(baseObj);
};

export const editBuyerContract = (payload, id) => {
    const baseObj = {
        url: `contracts/${id}`,
        data: {
            ...payload,
        },
    };
    return api.put(baseObj);
};

export const editSellerContract = (payload, id) => {
    const baseObj = {
        url: `seller-contracts/${id}`,
        data: {
            ...payload,
        },
    };
    return api.put(baseObj);
};

//notes

export const addNote = (payload) => {
    const baseObj = {
        url: `notes`,
        data: {
            ...payload,
        },
    };
    return api.post(baseObj);
};

export const editNote = (id, payload) => {
    const baseObj = {
        url: `notes/${id}`,
        data: {
            ...payload,
        },
    };
    return api.put(baseObj);
};

export const deleteNote = (id) => {
    const baseObj = {
        url: `notes`,
        id,
    };
    return api.delete(baseObj);
};

// planned shipments

export const addEditPlan = (id, payload) => {
    const baseObj = {
        url: `seller-contracts/planned/${id}`,
        data: {
            ...payload,
        },
    };
    return api.put(baseObj);
};

export const deletePlan = (id, payload) => {
    const baseObj = {
        url: `seller-contracts/planned`,
        id,
        data: {
            ...payload,
        },
    };
    return api.delete(baseObj);
};
