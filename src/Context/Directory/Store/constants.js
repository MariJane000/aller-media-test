export const SET_DIRECTORY_LOADER = 'SET_DIRECTORY_LOADER';
export const SET_DIRECTORY = 'SET_DIRECTORY';
export const SET_MODAL_LOADER = 'SET_MODAL_LOADER';

export const DIRECTORY_TYPE = {
    BUYERS: 'buyers',
    SELLERS: 'sellers',
    EXPORTERS: 'exporters',
    COMMODITIES: 'commodities',
};

export const DIRECTORY_NAME = {
    [DIRECTORY_TYPE.BUYERS]: 'Buyers',
    [DIRECTORY_TYPE.SELLERS]: 'Sellers',
    [DIRECTORY_TYPE.EXPORTERS]: 'Exporters',
    [DIRECTORY_TYPE.COMMODITIES]: 'Commodities',
};

export const DIRECTORY_SINGULAR_NAME = {
    [DIRECTORY_TYPE.BUYERS]: 'Buyer',
    [DIRECTORY_TYPE.SELLERS]: 'Seller',
    [DIRECTORY_TYPE.EXPORTERS]: 'Exporter',
    [DIRECTORY_TYPE.COMMODITIES]: 'Commodity',
};
