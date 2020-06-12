import api from '../../../../Framework/Api/api';

export const getSeller = (id) => {
    const baseObj = {
        url: `sellers/${id}`,
        data: {},
    };

    return api.get(baseObj);
};
