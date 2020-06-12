import { useState } from 'react';
import { useContractContext } from './useContractContext';
import * as queries from '../Store/queries';
import { CONTRACT_TYPE } from '../Store/constants';
import { setContract, setContractLoader } from '../Store/actions';

const queriesObj = {
    [CONTRACT_TYPE.BUYER]: queries.getBuyerContract,
    [CONTRACT_TYPE.SELLER]: queries.getSellerContract,
};

export const useGetContract = () => {
    const {
        state: { contract, contractLoader },
        dispatch,
    } = useContractContext();

    const [isNotesLoading, setIsNotesLoading] = useState(false);
    const [isPlanLoading, setIsPlanLoading] = useState(false);

    const getContractRequest = (type, id) => {
        dispatch(setContractLoader(true));
        queriesObj[type](id)
            .then((response) => {
                const { payload } = response.data;
                dispatch(setContractLoader(false));
                dispatch(setContract(payload));
            })
            .catch(() => {
                dispatch(setContractLoader(false));
            });
    };

    const getContracNotesRequest = (type, id) => {
        setIsNotesLoading(true);
        queriesObj[type](id)
            .then((response) => {
                const { payload } = response.data;
                dispatch(setContract(payload));
                setIsNotesLoading(false);
            })
            .catch(() => {
                setIsNotesLoading(false);
            });
    };

    const getPlannedRequest = (type, id) => {
        setIsPlanLoading(true);
        queriesObj[type](id)
            .then((response) => {
                const { payload } = response.data;
                dispatch(setContract(payload));
                setIsPlanLoading(false);
            })
            .catch(() => {
                setIsPlanLoading(false);
            });
    };

    return {
        contract,
        contractLoader,
        isNotesLoading,
        isPlanLoading,
        getContract: getContractRequest,
        getContractNotes: getContracNotesRequest,
        getPlanned: getPlannedRequest,
    };
};

export default useGetContract;
