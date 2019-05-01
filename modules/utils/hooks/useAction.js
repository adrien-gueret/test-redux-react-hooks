import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useAsyncCallback from './useAsyncCallback';

export default function useAction(action, deps) {
    const dispatch = useDispatch();
    const dispatchCallback = useCallback(() => dispatch(action), deps);
    
    const {
        runCallback,
        state,
        reset,
    } = useAsyncCallback(dispatchCallback, deps);

    const { isLoading, response: responsedAction, isError } = state;
  
    let error = null;

    if (isError || (responsedAction && responsedAction.error)) {
        error = responsedAction.payload.error;
    }

    return {
        dispatch: runCallback,
        isLoading,
        error,
        reset,
    };
}