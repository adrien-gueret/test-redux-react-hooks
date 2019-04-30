import useAsyncCallback from './useAsyncCallback';

export default function useDispatch(dispatchCallback, deps) {
    const {
        runCallback: runDispatch,
        state,
        reset,
    } = useAsyncCallback(dispatchCallback, deps);

    const { isLoading, response: responsedAction, isError } = state;
  
    let error = null;

    if (isError || (responsedAction && responsedAction.error)) {
        error = responsedAction.payload.error;
    }

    return {
        runDispatch,
        isLoading,
        error,
        reset,
    };
}