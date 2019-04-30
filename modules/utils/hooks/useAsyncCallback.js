import { useCallback, useMemo, useState } from 'react';

import areArraysEqual from '../services/areArraysEqual';

const INITIAL_STATE = {
    isLoading: false,
    response: null,
    isError: false,
};

export default function useAsyncCallback(asyncCallback, deps) {
    const [state, setState] = useState(INITIAL_STATE);

    const reset = () => {
        setState({
            ...INITIAL_STATE,
            deps,
        });
    };

    useMemo(reset, deps);

    const runCallback = useCallback(async (...args) => {
        try {
            setState({
                isLoading: true,
                response: null,
                isError: false,
                deps,
            });

            const response = await asyncCallback(...args);
            
            setState(prevState => {  
                if (!areArraysEqual(prevState.deps, deps)) {
                    return prevState;
                }

                return {
                    isLoading: false,
                    response,
                    isError: true,
                };
            });
        } catch (error) {
            setState((prevState) => {
                if (!areArraysEqual(prevState.deps, deps)) {
                    return prevState;
                }

                return {
                    isLoading: false,
                    response: error,
                    isError: true,
                };
            });
        }
    }, deps);

    return {
        runCallback,
        state,
        reset,
    };
}