import { useDirectoryContext } from './useDirectoryContext';
import * as queries from '../Store/queries';
import * as actions from '../Store/actions';

export const useGetDirectory = () => {
    const {
        state: { directory, directoryLoader },
        dispatch,
    } = useDirectoryContext();

    const getDirectoryRequest = (directoryType) => {
        dispatch(actions.setDirectoryLoader(true));

        queries
            .getDirectory(directoryType)
            .then((response) => {
                const { payload } = response.data;
                dispatch(actions.setDirectory(payload));
                dispatch(actions.setDirectoryLoader(false));
            })
            .catch((error) => {
                dispatch(actions.setDirectoryLoader(true));
            });
    };

    return { directory, directoryLoader, getDirectoryRequest };
};

export default useGetDirectory;
